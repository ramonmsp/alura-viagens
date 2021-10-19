const emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

function textToDate(text) {
  const parts = text.split('/');
  return new Date(parts[2], parts[1] - 1, parts[0]);
}

function convertDate(inputFormat) {
  function pad(s) { return (s < 10) ? `0${s}` : s; }
  const d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
}

const validatorField = {
  validateDate: (date, birthDay) => {
    if (date && date.length > 0) {
      const parts = date.split('/');

      if (parts.length < 3) {
        return 'Data Inválida!';
      }

      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10);
      const year = parseInt(parts[2], 10);

      if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return 'Data Inválida!';
      }

      if (day < 1 || year < 1) return 'Data Inválida!';

      if (month > 12 || month < 1) return 'Data Inválida!';

      if ((month === 1 || month === 3 || month === 5 || month === 7 || month === 8
        || month === 10 || month === 12) && day > 31) return 'Data Inválida!';

      if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) return 'Data Inválida!';

      if (month === 2) {
        if (((year % 4) === 0 && (year % 100) !== 0)
          || ((year % 400) === 0 && (year % 100) === 0)) {
          if (day > 29) return 'Data Inválida!';
        } else if (day > 28) return 'Data Inválida!';
      }

      if (!birthDay) {
        const today = convertDate(new Date());
        return textToDate(date) < textToDate(today) ? 'Data já passada!' : '';
      }

      return '';
    }

    return 'Campo obrigatório!';
  },
  validateText: (text) => {
    if (text && text.length > 0) {
      return '';
    }

    return 'Campo Obrigatório!';
  },
  validatePhone: (phone) => {
    if (phone && phone.length > 0) {
      if (phone.length < 16) {
        return 'Telefone Inválido!';
      }
      return '';
    }

    return 'Campo Obrigatório!';
  },
  validateEmail: (email) => {
    if (email && email.length > 0) {
      if (!emailPattern.test(email)) {
        return 'Email Inválido!';
      }
      return '';
    }

    return 'Campo Obrigatório!';
  },
  validateCpf: (cpf) => {
    if (cpf && cpf.length > 0) {
      const cpfSemMascara = cpf.replace(/[^\d]+/g, '');

      // Elimina CPFs invalidos conhecidos
      if (cpfSemMascara.length !== 11 || cpfSemMascara === '00000000000'
        || cpfSemMascara === '11111111111' || cpfSemMascara === '22222222222'
        || cpfSemMascara === '33333333333' || cpfSemMascara === '44444444444'
        || cpfSemMascara === '55555555555' || cpfSemMascara === '66666666666'
        || cpfSemMascara === '77777777777' || cpfSemMascara === '88888888888'
        || cpfSemMascara === '99999999999') return 'CPF Inválido!';

      // Valida 1º dígito
      let add = 0;
      let rev = 0;

      for (let i = 0; i < 9; i += 1) {
        add += parseInt(cpfSemMascara.charAt(i), 10) * (10 - i);
      }

      rev = 11 - (add % 11);

      if (rev === 10 || rev === 11) {
        rev = 0;
      }

      if (rev !== parseInt(cpfSemMascara.charAt(9), 10)) {
        return 'CPF Inválido!';
      }

      // Valida 2o digito
      add = 0;

      for (let i = 0; i < 10; i += 1) {
        add += parseInt(cpfSemMascara.charAt(i), 10) * (11 - i);
      }

      rev = 11 - (add % 11);

      if (rev === 10 || rev === 11) {
        rev = 0;
      }

      if (rev !== parseInt(cpfSemMascara.charAt(10), 10)) {
        return 'CPF Inválido!';
      }

      return '';
    }

    return 'Campo Obrigatório!';
  },
  identifyAge: (nascimento, hoje) => {
    if (nascimento && nascimento.length > 9) {
      const nasc = textToDate(nascimento);

      let diferencaAnos = hoje.getFullYear() - nasc.getFullYear();
      if (new Date  (hoje.getFullYear(), hoje.getMonth(), hoje.getDate())
        < new Date(hoje.getFullYear(), nasc.getMonth(), nasc.getDate())) { diferencaAnos -= 1; }

      if (diferencaAnos < 18) return 'Menor de 18 anos!';

      return '';
    }
    return 'Data Inválida!';
  },
  compareDates: (startDate, endDate, saida) => {
    if ((startDate && startDate.length > 9)
      && (endDate && endDate.length > 9)) {
      const dt1 = ((startDate instanceof Date) ? startDate : textToDate(startDate));
      const dt2 = ((endDate instanceof Date) ? endDate : textToDate(endDate));

      if (saida) {
        return dt1 > dt2 ? 'Data posterior a de Retorno!' : '';
      }
      return dt1 < dt2 ? 'Data anterior a de Saída!' : '';
    }

    return 'Data Inválida!';
  },
};

export default validatorField;
