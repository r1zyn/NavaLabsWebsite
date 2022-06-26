import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import type { NextComponent } from "../lib/types";

/**
 * Icon component for building FontAwesome icons.
 * @param {FontAwesomeIconProps} props The props for the icon component
 * @returns {JSX.Element}
 */
export const Icon: NextComponent<FontAwesomeIconProps> = (props: FontAwesomeIconProps): JSX.Element => <FontAwesomeIcon {...props} />;