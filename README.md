# App-shift Weekly Kitchen Shift Planner

A lightweight, browser-based staff scheduling application designed for professional kitchens. Built with **vanilla JavaScript, HTML, and CSS**, without frameworks or external dependencies.

The application simplifies weekly shift planning, automatically validates working-hour constraints, tracks staffing coverage, and generates schedules based on operational requirements.

## Features

### Weekly Shift Management

- Interactive weekly grid with employees and daily assignments.
- Navigate between weeks.
- Add and remove shifts directly from the calendar.
- Automatically save schedules using `localStorage`.

### Scheduling Rules & Validation

- Detect overlapping shifts.
- Enforce a minimum of 11 hours of rest between shifts.
- Detect assignments exceeding weekly contractual hours.
- Highlight scheduling conflicts in red.
- Support 9-hour shifts, including 8.5 working hours and a 30-minute unpaid break.
- Track a standard 42.5-hour working week.

### Staffing Coverage

The application tracks daily staffing requirements across three shifts:

| Shift | Required Staff |
|---|---|
| Opening / Breakfast | 1 |
| Middle / Lunch | 2 |
| Late / Evening | 2 |

**Minimum weekly coverage: 35 staff shifts.**

A dedicated coverage table highlights both understaffing and overstaffing.

### Days Off Management

- Employees can request up to 5 days off per month.
- Requested days off are respected by the automatic scheduler.
- Conflicting assignments are flagged automatically.
- Days off appear as `LIBERO` in CSV exports.

### Automatic Schedule Generation

A **greedy scheduling algorithm** generates weekly schedules while respecting working-hour limits, minimum rest periods, and requested days off.

Two scheduling modes are available:

- **Minimum Coverage:** Assigns only the 35 required weekly shifts.
- **Full Contract Hours:** Distributes additional shifts to help employees reach five working days per week.

### Export & Printing

- Export weekly schedules to CSV for Microsoft Excel.
- Print schedules in landscape orientation.

## Tech Stack

- **HTML5** – Application structure
- **CSS3** – Styling and layout
- **JavaScript (ES6+)** – Scheduling logic and user interactions
- **LocalStorage API** – Browser-based data persistence
- **Node.js** – Automated testing

No external libraries, frameworks, or databases required.

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Open `index.html` in your browser.

3. Start managing shifts or use **Reset Demo** to restore the sample data.

No installation or build process is required.

## Testing

Run the automated tests using:

```bash
node test.js
```

Core scheduling functions, including `findProblems` and `generateWeek`, are implemented as pure functions, allowing independent testing without a browser.

## Code Structure

The main `app.js` file is organized into seven sections:

1. Data models and demo data
2. UTC-based date utilities
3. Scheduling rules and conflict detection
4. Automatic shift generation
5. Local storage management
6. CSV export functionality
7. User interface and event handling

## Future Improvements

- Employee and shift management forms.
- Vacation and availability tracking.
- Individual shift preferences.
- External JSON data storage.
- Modular JavaScript architecture (`rules.js`, `ui.js`, `storage.js`).
- Advanced scheduling with a backtracking algorithm.
- Improved schedule optimization and workload distribution.

## Project Purpose

Turni was developed to explore practical workforce scheduling challenges in professional kitchen environments.

The project combines real-world hospitality operations with software development, focusing on **business logic, constraint validation, algorithmic problem-solving, and interactive user interfaces**.

It demonstrates how a lightweight JavaScript application can streamline staff scheduling without complex infrastructure.
