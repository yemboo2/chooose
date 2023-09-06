import { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

import { HomeTemplate } from '../components';
import { IExperience } from '../interfaces/experience';

const socket = socketIOClient('http://localhost:3001');

const Home = () => {
  const [experiences, setExperiences] = useState<IExperience[]>([]);

  useEffect(() => {
    const handleData = (data: IExperience[]) => {
      console.log('Data received:', data);
      setExperiences(data);
    };
    socket.on('initialData', handleData);
    socket.on('updateData', handleData);

    return () => {
      socket.off('initialData', handleData);
      socket.off('updateData', handleData);
    };
  }, []);

  return <HomeTemplate experiences={experiences} />;
};

export default Home;
