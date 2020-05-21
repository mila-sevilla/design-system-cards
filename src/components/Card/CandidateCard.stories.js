import React from 'react';
import CandidateCard from './CandidateCard';
import Grid from '../Grid';

export default {
  title: 'CandidateCard',
  component: CandidateCard,
};

export const All = () => (
  <Grid spacing="medium" tablet={{ columns: '1fr 1fr' }} desktop={{ columns: '1fr 1fr 1fr' }}>
    <CandidateCard />
    <CandidateCard />
    <CandidateCard />
    <CandidateCard />
    <CandidateCard />
    <CandidateCard />
  </Grid>
);
