import { Box } from "@chakra-ui/react";
import {
  ProfileHeadCard,
  ProfileJobCard,
  ProfileSkillCard,
} from "../components/Profile/Cards.jsx";

const Profile = () => {
  return (
    <>
      <Box py="8" width="57%" mx="auto">
        <Box mb={8}>
          <ProfileHeadCard />
        </Box>
        <Box mb={8}>
          <ProfileJobCard />
        </Box>
        <Box>
          <ProfileSkillCard />
        </Box>
      </Box>
    </>
  );
};

export default Profile;
