import React from 'react';
import { View, Text, Image, Button } from 'react-native-ui-lib';

const Profile = () => {
  // Sample user data (this could come from props or an API call)
  const user = {
    name: 'John Doe',
    email: 'johndoe@email.com',
    bio: 'A software engineer with a passion for building amazing applications.',
    avatarUrl: 'https://via.placeholder.com/150', // Placeholder image URL
  };

  return (
    <View flex paddingH-25 paddingT-50>
      {/* User Avatar */}
      <View center>
        <Image
          source={{ uri: user.avatarUrl }}
          style={{ width: 150, height: 150, borderRadius: 75 }}
        />
      </View>

      {/* User Information */}
      <View marginT-20>
        <Text text30 blue50 center>{user.name}</Text>
        <Text text70 grey20 center>{user.email}</Text>
        <Text text80 grey10 marginT-10 center>{user.bio}</Text>
      </View>

      {/* Edit Profile Button */}
      <View marginT-50 center>
        <Button text70 white background-blue30 label="Edit Profile" />
      </View>
    </View>
  );
};

export default Profile;
