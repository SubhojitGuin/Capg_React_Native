import { StyleSheet } from "react-native";
import { MD3Colors } from "react-native-paper";

const tabletStyles = StyleSheet.create({
    container: {
    flex: 1,
  },
  contentBody: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 5,
  },
  header: {
    backgroundColor: MD3Colors.primary30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 10
  },
  headerIcon: {
    margin: 10,
  },
  headerText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold"
  },
  footer: {
    backgroundColor: "#9fe5f8ff",
    marginVertical: 5,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    flexDirection: "row",
    gap: 10,
  },
    profileCard: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 2,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center"
  },
  avatarImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  profileEmail: {
    fontSize: 12,
    color: MD3Colors.neutralVariant50,
  },
  profileStatGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 8,
  },
  profileStat: {
    flexDirection: "row",
    gap: 8,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  profileStatCount: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  profileStatText: {
    fontSize: 11,
    color: MD3Colors.neutralVariant50,
  },
  summaryCard: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 2,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  summaryStatGroup: {
    flexDirection: "column",
    gap: 8,
  },
  summaryStat: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 5,
    width: '100%',
  },
  summaryStatIcon: {
    marginRight: 15,
  },
  summaryStatContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },
  summaryStatText: {
    fontSize: 13,
    color: '#333',
  },
  summaryStatCount: {
    fontWeight: "bold",
    fontSize: 14,
  },
  recentActivityCard: {
    boxShadow: '0px 0px 4px rgb(0, 0, 0, 0.3)',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 5,
    flex: 1
  },
  recentActivityTitle: {
    fontFamily: 'sans-serif',
    fontSize: 20,
  },
  recentActivityContent: {
    marginVertical: 10,
    flexDirection: "column",
    gap: 2,
  },
  recentActivityItem: {
    flexDirection: "row",
    gap: 20,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },
  recentActivityText: {
    fontFamily: 'sans-serif',
  }
});

export default tabletStyles;