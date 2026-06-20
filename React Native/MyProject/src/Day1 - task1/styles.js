import { StyleSheet } from "react-native";
import { MD3Colors } from "react-native-paper";

export const primaryColor = 'rgb(103, 80, 164)';
export const secondaryColor = 'rgb(212, 196, 255)';
export const tertiaryColor = 'rgb(232, 228, 245)';

export const checkboxCheckColor = 'rgb(14, 161, 6)';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: primaryColor,
    height: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#ffffff"
  },
    filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    gap: 5
  },
  filterButton: {
    flex: 1,
    borderColor: '#a4a0a0',
    borderWidth: 1,
  },
  filterButtonLabel: {
    fontSize: 12,
    marginHorizontal: 2
  },
  welcomeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    backgroundColor: tertiaryColor,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  avatar: {
    marginRight: 15,
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: secondaryColor,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: primaryColor,
  },
  welcomeTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: "#1E1E1E"
  },
  welcomeSubtitle: {
    fontSize: 14,
    marginTop: 2,
    color: '#666'
  },
  taskItem: {
    marginBottom: 15,
  },
  taskItemCompleted: {
    backgroundColor: "#d7ffdc"
  },
  taskItemContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  taskItemContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  taskItemTitleCompleted: {
    textDecorationLine: "line-through",
    color: MD3Colors.neutral40
  },
  dateBox: {
    flexDirection: "row",
    gap: 4,
    marginTop: 4,
  },
  addTaskBarContainer: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: '#E2E8F0',
  },
  addTaskBarInput: {
    flex: 1,
    height: 40
  },
  addTaskBarInputOutline: {
    borderRadius: 10,
    backgroundColor: MD3Colors.neutral95
  },
  addTaskButton: {
    backgroundColor: primaryColor,
    height: 40,
    borderRadius: 10
  },
  addTaskButtonLabel: {
    color: '#ffffff',
  }
});

export default styles;