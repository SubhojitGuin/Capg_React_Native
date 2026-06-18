import userEvent from "@testing-library/user-event";
import MainComponent from "./MainComponent";
import { renderWithRedux } from "./test-utils";

describe('MainComponent', () => {
  test('click on the reset button to reset the state successfully', async () => {
    const customState = {
      employees: {
        event: {
          name: "Event Name",
          venue: "Event Venue",
          time: "12:00 PM",
          day: "Friday"
        },
        activeFilter: 'All',
        allEmployees: [
          { id: 1, name: "Anu", team: "UI", status: "Going" },
          { id: 2, name: "Rahul", team: "Backend", status: "Not Going" }
        ]
      }
    };

    const { getByText, getAllByText, store } = renderWithRedux(<MainComponent />, { preloadedState: customState });

    const resetButton = getByText('Reset All');
    await userEvent.click(resetButton);

    expect(store.getState().employees.allEmployees[0].status).toBe('Pending');
    expect(store.getState().employees.allEmployees[1].status).toBe('Pending');
  }),

  test('get filtered employees for a set status', async () => {
    const customState = {
      employees: {
        event: {
          name: "Event Name",
          venue: "Event Venue",
          time: "12:00 PM",
          day: "Friday"
        },
        activeFilter: 'Going',
        allEmployees: [
          { id: 1, name: "Anu", team: "UI", status: "Going" },
          { id: 2, name: "Rahul", team: "Backend", status: "Not Going" }
        ]
      }
    };

    const { getByText, queryByText, store } = renderWithRedux(<MainComponent />, { preloadedState: customState });

    expect(getByText(store.getState().employees.allEmployees[0].name)).toBeInTheDocument();
    expect(queryByText(store.getState().employees.allEmployees[1].name)).not.toBeInTheDocument();
  })
});