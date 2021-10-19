import React, { useState } from 'react';

import FormContentWrapper from './styles/FormContentWrapper.js';
import Text from '../../../foundation/Text';
import TextField from '../../TextField';
import Button from '../../Button';
import Radio from '../../Radio';
import Autocomplete from '../../Autocomplete';

import cpfMask from '../../../../utils/cpfmask';
import dateMask from '../../../../utils/dateMask';
import phoneMask from '../../../../utils/phoneMask';
import validatorField from '../../../../utils/validatorField';

import countries from '../../../../utils/countries';

const PATTERNS = {
  textPattern: '[A-Za-záàâãéèêíïóôõöúüçñÁÀÂÃÉÈÍÏÓÔÕÖÜÚÇÑ ]+$',
};

function FormContent() {
  const [formData, setFormData] = useState({
    dataSaida: '',
    dataRetorno: '',
    localOrigem: '',
    localChegada: '',
    tipoPagamentoSelected: '',
    nome: '',
    sobrenome: '',
    paisResidencia: '',
    dataNascimento: '',
    cpf: '',
    email: '',
    telefone: '',
  });

  const [formErrors, setFormErrors] = useState({
    dataSaidaError: '',
    dataRetornoError: '',
    dataNascimentoError: '',
    localOrigemError: '',
    localChegadaError: '',
    nomeError: '',
    sobrenomeError: '',
    paisResidenciaError: '',
    telefoneError: '',
    emailError: '',
    cpfError: '',
  });

  const isFormInvalid = (formData.dataSaida.length === 0 || formErrors.dataSaidaError.length !== 0)
    || (formData.dataRetorno.length === 0 || formErrors.dataRetornoError.length !== 0)
    || (formData.dataNascimento.length === 0 || formErrors.dataNascimentoError.length !== 0)
    || (formData.localOrigem.length === 0 || formErrors.localOrigemError.length !== 0)
    || (formData.localChegada.length === 0 || formErrors.localChegadaError.length !== 0)
    || (formData.nome.length === 0 || formErrors.nomeError.length !== 0)
    || (formData.sobrenome.length === 0 || formErrors.sobrenomeError.length !== 0)
    || (formData.paisResidencia.length === 0 || formErrors.paisResidenciaError.length !== 0)
    || (formData.telefone.length === 0 || formErrors.telefoneError.length !== 0)
    || (formData.email.length === 0 || formErrors.emailError.length !== 0)
    || (formData.cpf.length === 0 || formErrors.cpfError.length !== 0)
    || formData.tipoPagamentoSelected.length === 0;

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    let fieldValue = '';

    if (fieldName === 'cpf') {
      fieldValue = cpfMask(event.target.value);
    } else if (fieldName === 'dataSaida'
      || fieldName === 'dataRetorno' || fieldName === 'dataNascimento') {
      fieldValue = dateMask(event.target.value);
    } else if (fieldName === 'telefone') {
      if (event.target.value.length < 17) {
        fieldValue = phoneMask.patternFix(event.target.value);
      } else {
        fieldValue = phoneMask.patternMobile(event.target.value).slice(0, 17);
      }
    } else {
      fieldValue = event.target.value;
    }

    setFormData({
      ...formData,
      [fieldName]: fieldValue,
    });
  }

  function handleClick(event) {
    const isClickArea = event.target.closest('[data-click-area="true"]');
    setFormData({
      ...formData,
      tipoPagamentoSelected: isClickArea.firstChild.value,
    });
  }

  function handleInput(event) {
    const char = String.fromCharCode(event.charCode);

    if (!char.match(PATTERNS.textPattern)) {
      event.preventDefault();
    }
  }

  function onBlur(event) {
    const fieldName = event.target.getAttribute('name');
    if (fieldName === 'dataSaida') {
      const fieldError = validatorField.validateDate(event.target.value, false);
      setFormErrors({
        ...formErrors,
        dataSaidaError: fieldError,
      });
      if (event.target.value && formData.dataRetorno && !fieldError) {
        setFormErrors({
          ...formErrors,
          dataSaidaError: validatorField.compareDates(
            event.target.value, formData.dataRetorno.toString(), true,
          ),
        });
      }
    } else if (fieldName === 'dataRetorno') {
      const fieldError = validatorField.validateDate(event.target.value, false);
      setFormErrors({
        ...formErrors,
        dataRetornoError: fieldError,
      });

      if (event.target.value && formData.dataSaida && !fieldError) {
        setFormErrors({
          ...formErrors,
          dataRetornoError: validatorField.compareDates(
            event.target.value, formData.dataSaida.toString(), false,
          ),
        });
      }
    } else if (fieldName === 'dataNascimento') {
      setFormErrors({
        ...formErrors,
        dataNascimentoError: validatorField.validateDate(event.target.value, true),
      });

      if (event.target.value) {
        setFormErrors({
          ...formErrors,
          dataNascimentoError: validatorField.identifyAge(event.target.value, new Date()),
        });
      }
    } else if (fieldName === 'localOrigem') {
      setFormErrors({
        ...formErrors,
        localOrigemError: validatorField.validateText(event.target.value),
      });

      setFormData({
        ...formData,
        [fieldName]: event.target.value,
      });
    } else if (fieldName === 'localChegada') {
      setFormErrors({
        ...formErrors,
        localChegadaError: validatorField.validateText(event.target.value),
      });

      setFormData({
        ...formData,
        [fieldName]: event.target.value,
      });
    } else if (fieldName === 'nome') {
      setFormErrors({
        ...formErrors,
        nomeError: validatorField.validateText(event.target.value),
      });
    } else if (fieldName === 'sobrenome') {
      setFormErrors({
        ...formErrors,
        sobrenomeError: validatorField.validateText(event.target.value),
      });
    } else if (fieldName === 'paisResidencia') {
      setFormErrors({
        ...formErrors,
        paisResidenciaError: validatorField.validateText(event.target.value),
      });

      setFormData({
        ...formData,
        [fieldName]: event.target.value,
      });
    } else if (fieldName === 'telefone') {
      setFormErrors({
        ...formErrors,
        telefoneError: validatorField.validatePhone(event.target.value),
      });
    } else if (fieldName === 'email') {
      setFormErrors({
        ...formErrors,
        emailError: validatorField.validateEmail(event.target.value),
      });
    } else if (fieldName === 'cpf') {
      setFormErrors({
        ...formErrors,
        cpfError: validatorField.validateCpf(event.target.value),
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    setTimeout(() => {
      setFormData({
        dataSaida: '',
        dataRetorno: '',
        localOrigem: '',
        localChegada: '',
        tipoPagamentoSelected: '',
        nome: '',
        sobrenome: '',
        paisResidencia: '',
        dataNascimento: '',
        cpf: '',
        email: '',
        telefone: '',
      });

      document.querySelector("[name='localOrigem']").value = '';
      document.querySelector("[name='localChegada']").value = '';
      document.querySelector("[name='paisResidencia']").value = '';
    }, 1000);
  }

  return (
    <FormContentWrapper onSubmit={handleSubmit}>
      <Text
        tag="h1"
        variant="titleXS"
        color="secondary.main"
        marginTop={{
          xs: '18px',
          md: '11px',
        }}
      >
        Alura Viagens
      </Text>
      <Text
        tag="p"
        variant="sectionText"
        marginTop={{
          xs: '-15px',
          md: '-35px',
        }}
        marginLeft={{
          md: '10px',
        }}
      >
        Quando será a viagem?
      </Text>

      <FormContentWrapper.InputGroup
        sizeInput="175px"
      >
        <div style={{
          marginRight: '20px',
        }}
        >
          <Text
            tag="label"
            variant="labelTextI"
            marginLeft={{
              md: '10px',
            }}
          >
            Data de saída
            <Text
              color="error.main"
              marginLeft={{
                md: '5px',
              }}
            >
              {formErrors.dataSaidaError}
            </Text>
          </Text>

          <TextField
            name="dataSaida"
            value={formData.dataSaida}
            width="318px"
            onChange={handleChange}
            onBlur={onBlur}
            color={formErrors.dataSaidaError ? 'error' : 'main'}
          />
        </div>

        <div style={{
        }}
        >
          <Text
            tag="label"
            variant="labelTextI"
            marginLeft={{
              md: '10px',
            }}
          >
            Data de retorno
            <Text
              color="error.main"
              marginLeft={{
                md: '10px',
              }}
            >
              {formErrors.dataRetornoError}
            </Text>
          </Text>

          <TextField
            name="dataRetorno"
            value={formData.dataRetorno}
            width="318px"
            onChange={handleChange}
            onBlur={onBlur}
            color={formErrors.dataRetornoError ? 'error' : 'main'}
          />
        </div>
      </FormContentWrapper.InputGroup>

      <FormContentWrapper.InputGroup
        sizeInput="255px"
      >
        <div style={{
          marginRight: '20px',
        }}
        >
          <Text
            tag="label"
            variant="labelTextI"
            marginLeft={{
              md: '10px',
            }}
          >
            Local de origem
            <Text
              color="error.main"
              marginLeft={{
                md: '5px',
              }}
            >
              {formErrors.localOrigemError}
            </Text>
          </Text>

          {/*
          <TextField
            name="localOrigem"
            value={formData.localOrigem}
            width="318px"
            onChange={handleChange}
            onKeyPress={handleInput}
            onBlur={onBlur}
            color={formErrors.localOrigemError ? 'error' : 'main'}
          />
          */}
          <Autocomplete
            options={countries}
            monitorField={['text']}
            optionValue="text"
            name="localOrigem"
            width="318px"
            onKeyPress={handleInput}
            onBlur={onBlur}
            color={formErrors.localOrigemError ? 'error' : 'main'}
          />
        </div>

        <div style={{
          marginRight: '20px',
        }}
        >
          <Text
            tag="label"
            variant="labelTextI"
            marginLeft={{
              md: '10px',
            }}
          >
            Local de chegada
            <Text
              color="error.main"
              marginLeft={{
                md: '5px',
              }}
            >
              {formErrors.localChegadaError}
            </Text>
          </Text>

          {/* <TextField
            name="localChegada"
            value={formData.localChegada}
            width="318px"
            onChange={handleChange}
            onKeyPress={handleInput}
            onBlur={onBlur}
            color={formErrors.localChegadaError ? 'error' : 'main'}
          /> */}
          <Autocomplete
            options={countries}
            monitorField={['text']}
            optionValue="text"
            name="localChegada"
            width="318px"
            onKeyPress={handleInput}
            onBlur={onBlur}
            color={formErrors.localOrigemError ? 'error' : 'main'}
          />
        </div>
      </FormContentWrapper.InputGroup>

      <Text
        tag="p"
        variant="sectionText"
        marginTop="-10px"
        marginLeft={{
          md: '10px',
        }}
      >
        Como será o pagamento?
      </Text>

      <FormContentWrapper.InputGroup
        marginTop="-10px"
        marginBottom="30px"
        flexDirection="row"
      >
        <Radio
          start_round_edge
          name="tipo-pagamento"
          value="Transferência"
          srcimg="images/transferencia.png"
          selected={formData.tipoPagamentoSelected === 'Transferência'}
          onClick={handleClick}
        />

        <Radio
          name="tipo-pagamento"
          value="Cartão"
          srcimg="images/credit_card.png"
          selected={formData.tipoPagamentoSelected === 'Cartão'}
          onClick={handleClick}
        />

        <Radio
          end_round_edge
          name="tipo-pagamento"
          value="PayPal"
          srcimg="images/paypal.png"
          selected={formData.tipoPagamentoSelected === 'PayPal'}
          onClick={handleClick}
        />
      </FormContentWrapper.InputGroup>

      <Text
        tag="p"
        variant="sectionText"
        marginTop="-10px"
        marginLeft={{
          md: '10px',
        }}
      >
        Quem vai viajar?
      </Text>

      <FormContentWrapper.InputGroup
        sizeInput="530px"
        flexDirection="column"
      >
        <div>
          <Text
            tag="label"
            variant="labelTextII"
            marginLeft={{
              md: '10px',
            }}
          >
            Nome
            <Text
              color="error.main"
              marginLeft={{
                md: '5px',
              }}
            >
              {formErrors.nomeError}
            </Text>
          </Text>

          <TextField
            name="nome"
            value={formData.nome}
            width="318px"
            onChange={handleChange}
            onKeyPress={handleInput}
            onBlur={onBlur}
            color={formErrors.nomeError ? 'error' : 'main'}
          />
        </div>
        <div>
          <Text
            tag="label"
            variant="labelTextII"
            marginLeft={{
              md: '10px',
            }}
          >
            Sobrenome
            <Text
              color="error.main"
              marginLeft={{
                md: '5px',
              }}
            >
              {formErrors.sobrenomeError}
            </Text>
          </Text>

          <TextField
            name="sobrenome"
            value={formData.sobrenome}
            width="318px"
            onChange={handleChange}
            onKeyPress={handleInput}
            onBlur={onBlur}
            color={formErrors.sobrenomeError ? 'error' : 'main'}
          />
        </div>
      </FormContentWrapper.InputGroup>

      <FormContentWrapper.InputGroup
        sizeInput="235px"
      >
        <div style={{
          marginRight: '60px',
        }}
        >
          <Text
            tag="label"
            variant="labelTextII"
            marginLeft={{
              md: '10px',
            }}
          >
            País de residência
            <Text
              color="error.main"
              marginLeft={{
                md: '5px',
              }}
            >
              {formErrors.paisResidenciaError}
            </Text>
          </Text>

          {/* <TextField
            name="paisResidencia"
            value={formData.paisResidencia}
            width="318px"
            onChange={handleChange}
            onKeyPress={handleInput}
            onBlur={onBlur}
            color={formErrors.paisResidenciaError ? 'error' : 'main'}
          /> */}
          <Autocomplete
            options={countries}
            monitorField={['text']}
            optionValue="text"
            name="paisResidencia"
            width="318px"
            onKeyPress={handleInput}
            onBlur={onBlur}
            color={formErrors.localOrigemError ? 'error' : 'main'}
          />
        </div>

        <div style={{
          marginRight: '20px',
        }}
        >
          <Text
            tag="label"
            variant="labelTextII"
            marginLeft={{
              md: '10px',
            }}
          >
            Data de nascimento
            <Text
              color="error.main"
              marginLeft={{
                md: '10px',
              }}
            >
              {formErrors.dataNascimentoError}
            </Text>
          </Text>

          <TextField
            name="dataNascimento"
            value={formData.dataNascimento}
            width="318px"
            onChange={handleChange}
            onBlur={onBlur}
            color={formErrors.dataNascimentoError ? 'error' : 'main'}
          />
        </div>
      </FormContentWrapper.InputGroup>

      <FormContentWrapper.InputGroup
        sizeInput="530px"
        flexDirection="column"
      >
        <div>
          <Text
            tag="label"
            variant="labelTextII"
            marginLeft={{
              md: '10px',
            }}
          >
            CPF
            <Text
              color="error.main"
              marginLeft={{
                md: '5px',
              }}
            >
              {formErrors.cpfError}
            </Text>
          </Text>

          <TextField
            name="cpf"
            value={formData.cpf}
            width="318px"
            onChange={handleChange}
            onBlur={onBlur}
            color={formErrors.cpfError ? 'error' : 'main'}
          />
        </div>
        <div>
          <Text
            tag="label"
            variant="labelTextII"
            marginLeft={{
              md: '10px',
            }}
          >
            Email
            <Text
              color="error.main"
              marginLeft={{
                md: '5px',
              }}
            >
              {formErrors.emailError}
            </Text>
          </Text>

          <TextField
            name="email"
            value={formData.email}
            width="318px"
            onChange={handleChange}
            onBlur={onBlur}
            color={formErrors.emailError ? 'error' : 'main'}
          />
        </div>
        <div>
          <Text
            tag="label"
            variant="labelTextII"
            marginLeft={{
              md: '10px',
            }}
          >
            Telefone
            <Text
              color="error.main"
              marginLeft={{
                md: '5px',
              }}
            >
              {formErrors.telefoneError}
            </Text>
          </Text>

          <TextField
            name="telefone"
            value={formData.telefone}
            width="318px"
            onChange={handleChange}
            onBlur={onBlur}
            color={formErrors.telefoneError ? 'error' : 'main'}
          />
        </div>
      </FormContentWrapper.InputGroup>

      <Button
        color="primary.contrast"
        background="background.main"
        type="submit"
        disabled={isFormInvalid}
      >
        Comprar
      </Button>
    </FormContentWrapper>
  );
}

export default function TravelForm() {
  return (
    <div>
      <FormContent />
    </div>
  );
}
