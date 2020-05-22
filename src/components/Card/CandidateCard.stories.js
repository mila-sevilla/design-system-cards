import React from 'react';
import CandidateCard from './CandidateCard';
import Grid from '../Layouts/Grid';
import Candidates from '../../data/candidates.json';

export default {
  title: 'CandidateCard',
  component: CandidateCard,
};

export const All = () => (
  <Grid spacing="medium" tablet={{ columns: '1fr 1fr' }} desktop={{ columns: '1fr 1fr 1fr' }}>
    {Candidates.map((candidate, index) => (
      <CandidateCard candidateId={index} />
    ))}
  </Grid>
);
