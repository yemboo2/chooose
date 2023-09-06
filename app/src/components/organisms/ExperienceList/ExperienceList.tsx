import { Box, HStack, SimpleGrid } from '@chakra-ui/react';
import { IExperience } from '../../../interfaces/experience';
import { ExperienceCard } from '../../molecules';

interface IExperienceListProps {
  experiences: IExperience[];
}

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

{
  /* </Box>
  <Box display="flex">

    {experiences.map((exp) => (
      <Box m={3}>
        <ExperienceCard
          key={exp.title}
          title={exp.title}
          imageUrl={exp.imageUrl}
          countries={exp.countries}
          days={exp.days}
          offset={exp.offset}
          rating={exp.rating}
        />
      </Box>
    ))}
  </Box> */
}
