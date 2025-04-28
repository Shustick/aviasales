import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setWarning } from '../../store/actions/warningAcrions';

function withTickets(Component) {
  return function WithItems(props) {
    const checkboxData = useSelector((state) => state.checkbox);
    const ticketsData = useSelector((state) => state.tickets.tickets);
    // const areTicketsLoaded = useSelector((state) => state.tickets.areTicketsLoaded);
    const activeTab = useSelector((state) => state.activeTab); //cheapest, fastest, optimal
    const visibleCount = useSelector((state) => state.loadMoreBtn);
    const warning = useSelector((state) => state.warning);
    const dispatch = useDispatch();

    const pricePerMinute = useMemo(() => {
      const { totalPrice, totalDuration } = ticketsData.reduce(
        (acc, ticket) => {
          acc.totalPrice += ticket.price;
          acc.totalDuration += ticket.segments[0].duration + ticket.segments[1].duration;
          return acc;
        },
        { totalPrice: 0, totalDuration: 0 }
      );
      if (totalPrice === 0) return 1;
      return (totalDuration / totalPrice) * 1000;
    }, [ticketsData]);

    const sortedTickets = useMemo(() => {
      const sortFnMap = {
        cheapest: (a, b) => a.price - b.price,
        fastest: (a, b) =>
          a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration),
        optimal: (a, b) => {
          const totalDurationA = a.segments[0].duration + a.segments[1].duration;
          const totalDurationB = b.segments[0].duration + b.segments[1].duration;
          const scoreA = totalDurationA * pricePerMinute + a.price;
          const scoreB = totalDurationB * pricePerMinute + b.price;
          return scoreA - scoreB;
        },
      };

      const sortFn = sortFnMap[activeTab];
      const sorted = [...ticketsData].sort(sortFn);

      return sorted;
    }, [ticketsData, activeTab, pricePerMinute]);

    const activeStops = useMemo(() => {
      return checkboxData.filter((item) => item.checked && item.transfers !== 'all').map((item) => item.transfers);
    }, [checkboxData]);

    const filteredTickets = useMemo(() => {
      if (!sortedTickets.length) return [];

      const isAllActive = checkboxData[0].checked;
      if (isAllActive) return sortedTickets;

      return sortedTickets.filter(
        (ticket) =>
          activeStops.includes(ticket.segments[0].stops.length) && activeStops.includes(ticket.segments[1].stops.length)
      );
    }, [sortedTickets, checkboxData, activeStops]);

    useEffect(() => {
      if (filteredTickets.length === 0) {
        dispatch(setWarning(true));
      } else dispatch(setWarning(false));
    }, [filteredTickets, dispatch]);

    const visibleTickets = filteredTickets.slice(0, visibleCount);
    return <Component {...props} visibleTickets={visibleTickets} warning={warning} />;
  };
}

export default withTickets;
