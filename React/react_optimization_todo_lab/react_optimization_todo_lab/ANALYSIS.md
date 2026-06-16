# Analysis

## Todo 1

The `filteredRequests` are stored using `React.useMemo()` to prevent unnecessary re-calculations when the props haven't changed. This optimization is crucial for performance, especially when dealing with large datasets or complex UI components.

## Todo 2

The `handleViewDetails` and `handleResolve` functions are memoized using the `React.useCallback()` hook. This ensures that these functions are only recreated when their dependencies change, which helps in preventing unnecessary re-renders of child components that rely on these functions as props.

## Todo 3

Similarly, `handleInputChange` and `handleFormSubmit` are also memoized using `React.useCallback()`. New arrow functions were introduced like, `handleSearchChange`, `handleStatusChange` and `handleSortChange` so that it can be enclosed within `React.useMemo()`. This approach maintains the performance benefits of memoization while allowing for more granular control over input handling.

## Todo 4

The `AnalyticsPanel` and `ReportPanel` components are lazy loaded using `React.lazy()` and `Suspense` as they have heavy computations. This means that these components are only loaded when they are actually needed, which can significantly reduce the initial load time of the application. By splitting the code into smaller chunks, we can improve the user experience by making the application feel faster and more responsive.

## Todo 5

The `useDebounce()` hook is used to debounce the search input, preventing excessive API calls as the user types. This improves the application's performance and responsiveness by limiting the number of times the search function is executed.

## AnalyticsPanel

The `categoryCounts` are stored using `React.useMemo()` to prevent unnecessary re-calculations when the props haven't changed.

The `AnalyticsPanel` is enclosed within `React.memo()` to prevent unnecessary re-renders when the props haven't changed.

## FilterPanel

The `<select></select>` elements are replaced with a custom `SelectField` component to prevent unnecessary re-renders when the props haven't changed. The `SelectField` component is enclosed within `React.memo()` to prevent unnecessary re-renders when the props haven't changed.

The `handleStatusChange` and `handleSortChange` functions are memoized using the `React.useCallback()` hook. This ensures that these functions are only recreated when their dependencies change.

The `FilterPanel` component is enclosed within `React.memo()` to prevent unnecessary re-renders when the props haven't changed.

## ReportPanel

The `ReportPanel` is enclosed within `React.memo()` to prevent unnecessary re-renders when the props haven't changed.

## RequestCard

The `RequestCard` is enclosed within `React.memo()` to prevent unnecessary re-renders when the props haven't changed.

## RequestForm

The `RequestForm` component is split into smaller components with `React.memo()`, such as `TextField`, `SelectField` and `TextAreaField`, to prevent unnecessary re-renders of these child components when the props haven't changed.

The `RequestForm` is enclosed within `React.memo()` to prevent unnecessary re-renders when the props haven't changed.

## RequestList

The `RequestList` is enclosed within `React.memo()` to prevent unnecessary re-renders of the component and its child components when the props haven't changed.

## SearchBar

The `SearchBar` is enclosed within `React.memo()` to prevent unnecessary re-renders when the props haven't changed.

## SummaryCards

The calculation of `total`, `openCount`, `resolvedCount` and `highPriority` are stored using `React.useMemo()` to prevent unnecessary re-calculations when the props haven't changed.

The `SummaryCards` are enclosed within `React.memo()` to prevent unnecessary re-renders when the props haven't changed.