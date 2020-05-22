const getSpacingToken = theme => ({
  none: '0',
  tiny: theme.spacing.xxs,
  small: theme.spacing.xs,
  normal: theme.spacing.sm,
  medium: theme.spacing.md,
  large: theme.spacing.lg,
  extraLarge: theme.spacing.xl,
  largest: theme.spacing.xxl,
});

export default getSpacingToken;
