import { Box, HStack, SimpleGrid } from '@chakra-ui/react';
import { IExperience } from '../../../interfaces/experience';
import { ExperienceCard } from '../../molecules';

interface IExperienceListProps {
  experiences: IExperience[];
}

// FIXME: possibly change layout to a SimpleGrid when on mobileMode (useMediaQuery)
const ExperienceList = ({ experiences }: IExperienceListProps) => (
  <Box overflowX="auto" maxHeight="400px">
    <HStack spacing={4}>
      {experiences.map((exp) => (
        <ExperienceCard
          key={exp.title}
          title={exp.title}
          imageUrl={exp.imageUrl}
          countries={exp.countries}
          days={exp.days}
          offset={exp.offset}
          rating={exp.rating}
        />
      ))}
    </HStack>
  </Box>
);

export default ExperienceList;
