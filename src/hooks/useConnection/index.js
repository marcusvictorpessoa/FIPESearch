import NetInfo from '@react-native-community/netinfo';

export default function useConnection() {
  async function getConnectionState() {
    const connection = await NetInfo.fetch();
    return connection.isConnected;
  }

  return {getConnectionState};
}