import { StyleSheet } from "react-native";
import { MD3Colors } from "react-native-paper";

const tabletStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentBody: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
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
    paddingVertical: 20,
    paddingHorizontal: 10,
    boxShadow: '0px 0px 4px rgb(0, 0, 0, 0.3)',
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%'
  },
  profileHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: 'sans-serif'
  },
  profileEmail: {
    color: MD3Colors.neutralVariant50,
  },
  profileStatGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  profileStat: {
    flexDirection: "row",
    gap: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  profileStatBorder: {
    borderRightColor: "#b7b6b6",
    borderRightWidth: 1
  },
  profileStatCount: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  profileStatText: {
    color: MD3Colors.neutralVariant50,
  },
  summaryCard: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 10,
    boxShadow: '0px 0px 4px rgb(0, 0, 0, 0.3)',
    marginHorizontal: 10,
    borderRadius: 5,
    width: '100%'
  },
  summaryTitle: {
    fontSize: 20,
    fontFamily: 'sans-serif'
  },
  summaryStatGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
  summaryStat: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  summaryStatIcon: {
    marginBottom: 10,
  },
  summaryStatContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  summaryStatText: {
    fontWeight: "light",
    fontSize: 14,
    fontFamily: 'sans-serif'
  },
  summaryStatCount: {
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: 'sans-serif',
    marginTop: 5,
  },
  recentActivityCard: {
    boxShadow: '0px 0px 4px rgb(0, 0, 0, 0.3)',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    marginVertical: 10,
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
    // fontWeight: "bold"
  }
});

export default tabletStyles;