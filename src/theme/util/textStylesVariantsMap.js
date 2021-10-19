import { css } from 'styled-components';

import theme from '../index';

const { typographyVariants } = theme;

const textStylesVariantsMap = {
  titleXS: css`
    font-family: ${typographyVariants.titleXS.fontFamily};
    font-style: ${typographyVariants.titleXS.fontStyle};
    font-weight: ${typographyVariants.titleXS.fontWeight};
    font-size: ${typographyVariants.titleXS.fontSize};
    line-height: ${typographyVariants.titleXS.lineHeight};
  `,
  titleMD: css`
    font-family: ${typographyVariants.titleMD.fontFamily};
    font-style: ${typographyVariants.titleMD.fontStyle};
    font-weight: ${typographyVariants.titleMD.fontWeight};
    font-size: ${typographyVariants.titleMD.fontSize};
    line-height: ${typographyVariants.titleMD.lineHeight};
  `,
  sectionText: css`
    font-family: ${typographyVariants.sectionText.fontFamily};
    font-style: ${typographyVariants.sectionText.fontStyle};
    font-weight: ${typographyVariants.sectionText.fontWeight};
    font-size: ${typographyVariants.sectionText.fontSize};
    line-height: ${typographyVariants.sectionText.lineHeight};
  `,
  labelTextI: css`
    font-family: ${typographyVariants.labelTextI.fontFamily};
    font-style: ${typographyVariants.labelTextI.fontStyle};
    font-weight: ${typographyVariants.labelTextI.fontWeight};
    font-size: ${typographyVariants.labelTextI.fontSize};
    line-height: ${typographyVariants.labelTextI.lineHeight};
  `,
  labelTextII: css`
    font-family: ${typographyVariants.labelTextII.fontFamily};
    font-style: ${typographyVariants.labelTextII.fontStyle};
    font-weight: ${typographyVariants.labelTextII.fontWeight};
    font-size: ${typographyVariants.labelTextII.fontSize};
    line-height: ${typographyVariants.labelTextII.lineHeight};
  `,
  radioText: css`
    font-family: ${typographyVariants.radioText.fontFamily};
    font-style: ${typographyVariants.radioText.fontStyle};
    font-weight: ${typographyVariants.radioText.fontWeight};
    font-size: ${typographyVariants.radioText.fontSize};
    line-height: ${typographyVariants.radioText.lineHeight};
  `,
  buttonText: css`
    font-family: ${typographyVariants.buttonText.fontFamily};
    font-style: ${typographyVariants.buttonText.fontStyle};
    font-weight: ${typographyVariants.buttonText.fontWeight};
    font-size: ${typographyVariants.buttonText.fontSize};
    line-height: ${typographyVariants.buttonText.lineHeight};
  `,
};

export default textStylesVariantsMap;
