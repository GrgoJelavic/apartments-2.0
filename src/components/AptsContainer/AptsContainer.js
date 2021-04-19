import React from 'react';
import ApartmentsFilter from '../AptsFilter/AptsFilter';
import ApartmentsList from '../AptsList/AptsList';
import { withApartmentConsumer } from '../../Context/Context';
import Loading from '../Loading/Loading';

function ApartmentsContainer({ context }) {
  const { loading, sortedApts, apartments } = context;

  if (loading) return <Loading />;

  return (
    <>
      <ApartmentsFilter apartments={apartments} />
      <ApartmentsList apartments={sortedApts} />
    </>
  );
}

export default withApartmentConsumer(ApartmentsContainer);
