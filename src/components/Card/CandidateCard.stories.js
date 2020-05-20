import React from 'react';
import CandidateCard from './CandidateCard';
import Stack from '../Stack';

export default {
  title: 'CandidateCard',
  component: CandidateCard,
};

export const All = () => (
  <Stack spacingChildren="medium" flex align="center">
    <CandidateCard />
    <CandidateCard />
    <CandidateCard />
    <CandidateCard />
  </Stack>
);
