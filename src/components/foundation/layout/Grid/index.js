/* eslint-disable indent */
import styled, { css } from 'styled-components';

import breakpointsMedia from '../../../../theme/util/breakpointsMedia';

const Grid = {
  Container: styled.div`
    width: 100%;
    padding-right: 0px;
    padding-left: 0px;
    margin-right: auto;
    margin-left: auto;
    max-width: initial;
  `,
  Row: styled.div`
    display: flex;
    flex-wrap: wrap;
  `,
  Column: styled.div`
    padding-right: 15px;
    padding-left: 15px;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;

    ${function handleValue({ value }) {
        if (typeof value === 'number') {
            return css`
                flex-grow: 0;
                flex-shrink: 0;
                flex-basis: ${(100 * value) / 12}%;
                max-width: ${(100 * value) / 12}%;
            `;
        }

        return breakpointsMedia({
            xs: value?.xs
                ? css`
                    flex-grow: 0;
                    flex-shrink: 0;
                    flex-basis: ${(100 * value.xs) / 12}%;
                    max-width: ${(100 * value.xs) / 12}%;
                `
                : '',
            sm: value?.sm
                ? css`
                    flex-grow: 0;
                    flex-shrink: 0;
                    flex-basis: ${(100 * value.sm) / 12}%;
                    max-width: ${(100 * value.sm) / 12}%;
                `
                : '',
            md: value?.md
                ? css`
                    flex-grow: 0;
                    flex-shrink: 0;
                    flex-basis: ${(100 * value.md) / 12}%;
                    max-width: ${(100 * value.md) / 12}%;
                `
                : '',
            lg: value?.lg
                ? css`
                    flex-grow: 0;
                    flex-shrink: 0;
                    flex-basis: ${(100 * value.lg) / 12}%;
                    max-width: ${(100 * value.lg) / 12}%;
                `
                : '',
            xl: value?.xl
                ? css`
                    flex-grow: 0;
                    flex-shrink: 0;
                    flex-basis: ${(100 * value.xl) / 12}%;
                    max-width: ${(100 * value.xl) / 12}%;
                `
                : '',
        });
    }}

    ${function handleOffset({ offset }) {
        if (typeof offset === 'number') {
            return css`
                margin-left: ${(100 * offset) / 12}%;
            `;
        }

        return breakpointsMedia({
            xs: offset?.xs
                ? css`
                    margin-left: ${(100 * offset.xs) / 12}%;
                `
                : '',
            sm: offset?.sm
                ? css`
                    margin-left: ${(100 * offset.sm) / 12}%;
                `
                : '',
            md: offset?.md
                ? css`
                    margin-left: ${(100 * offset.md) / 12}%;
                `
                : '',
            lg: offset?.lg
                ? css`
                    margin-left: ${(100 * offset.lg) / 12}%;
                `
                : '',
            xl: offset?.xl
                ? css`
                    margin-left: ${(100 * offset.xl) / 12}%;
                `
                : '',
        });
    }}
  `,
};

export default Grid;
