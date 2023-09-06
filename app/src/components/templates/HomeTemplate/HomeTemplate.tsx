import { Box } from '@chakra-ui/react';

import { IExperience } from '../../../interfaces/experience';
import { ExperienceList } from '../../organisms';

interface IHomeTemplateProps {
  experiences: IExperience[];
}

const HomeTemplate = ({ experiences }: IHomeTemplateProps) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="100vw"
      h="100vh"
      bg="light-grey"
      overflow="hidden"
    >
      <ExperienceList experiences={experiences} />
    </Box>
  );
};

export default HomeTemplate;
