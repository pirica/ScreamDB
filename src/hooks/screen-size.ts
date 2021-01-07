import {Theme, useMediaQuery} from "@material-ui/core";

export const useXS = () => useMediaQuery<Theme>(theme => theme.breakpoints.down('xs'))
export const useSM = () => useMediaQuery<Theme>(theme => theme.breakpoints.down('sm'))
export const useMD = () => useMediaQuery<Theme>(theme => theme.breakpoints.down('md'))
export const useLandscape = () => useMediaQuery('(orientation: landscape)');
export const usePortrait = () => useMediaQuery('(orientation: portrait)');
