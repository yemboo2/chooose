import { Box, Icon, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { FaStar } from 'react-icons/fa';

interface IRatingProps {
  rating: number;
}

type TFillingType = 'full' | 'empty' | number;

const StarRating = ({ rating }: IRatingProps) => {
  const fullStars = Math.floor(rating);
  const fractionalPart = rating - fullStars;

  const stars = Array.from({ length: 5 }, (_, index) => {
    let fillingTyp: TFillingType = 'empty';

    if (index < fullStars) {
      fillingTyp = 'full';
    } else if (index === fullStars && fractionalPart > 0) {
      fillingTyp = fractionalPart;
    }

    return <Icon key={`star-${index}`} as={FaStar} boxSize={5} sx={{ fill: `url(#linearColors-${fillingTyp})` }} />;
  });

  const svgs = () => (
    <>
      <svg width={0} height={0}>
        <linearGradient id={`linearColors-full`} x1={0} y1={1} x2={1} y2={1}>
          <stop offset={0} stopColor="yellow" />
          <stop offset={1} stopColor="yellow" />
        </linearGradient>
        <linearGradient id={`linearColors-empty`} x1={0} y1={1} x2={1} y2={1}>
          <stop offset={0} stopColor="dark-grey" />
          <stop offset={1} stopColor="dark-grey" />
        </linearGradient>
        <linearGradient id={`linearColors-${fractionalPart}`} x1={0} y1={1} x2={1} y2={1}>
          <stop offset={0} stopColor="yellow" />
          <stop offset={1 - (1 - fractionalPart) * 1.75} stopColor="yellow" />
          <stop offset={1} stopColor="dark-grey" />
        </linearGradient>
      </svg>
    </>
  );

  return (
    <Box display="flex">
      {svgs()}
      <Box display="flex" alignItems="center">
        {stars}
        <Text fontSize="1xl" fontWeight="bold" ml={1}>
          {rating}
        </Text>
      </Box>
    </Box>
  );
};

export default StarRating;
