import { Box, Card, Image, Text } from '@chakra-ui/react';

import { StarRating } from '../../atoms';

interface IExperienceCardProps {
  title: string;
  imageUrl: string;
  days: number;
  countries: number;
  offset: number; // kg
  rating: number; // 1-5
}

const ExperienceCard = ({ title, imageUrl, days, countries, offset, rating }: IExperienceCardProps) => {
  const subTitle = `${countries} Countr${countries > 1 ? 'ies' : 'y'}, ${days} Day${days > 1 ? 's' : ''}`;

  const isTonsOffset = offset >= 1000;
  const offsetText = `${isTonsOffset ? `${Math.round(offset / 10) / 100} t` : `${Math.round(offset)} kg`}CO2e`;

  // TODO: add shadow to image
  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      borderRadius={20}
      p={3}
      borderWidth="1px"
      borderColor="light-grey"
      h={[330, 350, 400]}
      minW={[400, 430, 470]}
    >
      <Box
        bgImage={imageUrl}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgColor="white"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-end"
        borderRadius={10}
        h="100%"
        position="relative"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderRadius={10}
          background="linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))"
          zIndex={0}
        />
        <Text fontSize="2xl" zIndex={1} fontWeight="bold" color="white" textAlign="center" ml={3} mr={3}>
          {title}
        </Text>
        <Text fontSize="xs" zIndex={1} fontWeight="bold" color="white">
          {subTitle}
        </Text>

        <Box
          bg="gray.900"
          zIndex={1}
          display="flex"
          justifyContent="space-between"
          p={3}
          borderRadius={10}
          w={280}
          mt="4%"
        >
          <Text fontSize="sm" fontWeight="bold" color="white">
            Emission offset:
          </Text>
          <Text fontSize="sm" fontWeight="bold" color="white">
            {offsetText}
          </Text>
        </Box>

        <Box
          display="flex"
          zIndex={1}
          alignItems="center"
          left="auto"
          backgroundColor="white"
          justifyContent="space-between"
          p={4}
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
          w={280}
          mt="15%"
        >
          <Text fontSize="sm" fontWeight="bold" mr={2}>
            Trip Rating
          </Text>
          <StarRating rating={rating} />
        </Box>
      </Box>
    </Box>
  );
};

export default ExperienceCard;
