import * as React from 'react';
import { SxProps } from '@material-ui/system';
import { InternalStandardProps as StandardProps, Theme } from '..';
import { InputProps } from '../Input';
import { NativeSelectInputProps } from './NativeSelectInput';

export interface NativeSelectProps
  extends StandardProps<InputProps, 'inputProps' | 'value' | 'onChange'> {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes?: {
    /** Styles applied to the root element. */
    root?: string;
    /** Styles applied to the select component `select` class. */
    select?: string;
    /** Styles applied to the select component if `variant="filled"`. */
    filled?: string;
    /** Styles applied to the select component if `variant="outlined"`. */
    outlined?: string;
    /** Styles applied to the select component if `variant="standard"`. */
    standard?: string;
    /** Pseudo-class applied to the select component `disabled` class. */
    disabled?: string;
    /** Styles applied to the icon component. */
    icon?: string;
    /** Styles applied to the icon component if the popup is open. */
    iconOpen?: string;
    /** Styles applied to the icon component if `variant="filled"`. */
    iconFilled?: string;
    /** Styles applied to the icon component if `variant="outlined"`. */
    iconOutlined?: string;
    /** Styles applied to the icon component if `variant="standard"`. */
    iconStandard?: string;
    /** Styles applied to the underlying native input component. */
    nativeInput?: string;
  };
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent?: React.ElementType;
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   * @default <Input />
   */
  input?: React.ReactElement<any, any>;
  /**
   * <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes">Attributes</a> applied to the `select` element.
   */
  inputProps?: NativeSelectInputProps;
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange?: NativeSelectInputProps['onChange'];
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   * The `input` value. The DOM API casts this to a string.
   */
  value?: unknown;
  /**
   * The variant to use.
   */
  variant?: 'standard' | 'outlined' | 'filled';
}

export type NativeSelectClassKey = keyof NonNullable<NativeSelectProps['classes']>;

/**
 * An alternative to `<Select native />` with a much smaller bundle size footprint.
 *
 * Demos:
 *
 * - [Selects](https://material-ui.com/components/selects/)
 *
 * API:
 *
 * - [NativeSelect API](https://material-ui.com/api/native-select/)
 * - inherits [Input API](https://material-ui.com/api/input/)
 */
declare const NativeSelect: ((props: NativeSelectProps) => JSX.Element) & { muiName: string };

export default NativeSelect;
