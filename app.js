// -------- ROLES --------//

const ROLES = {
    CHEF: 'Chef',
    JUNIOR_SOUS_CHEF: 'Junior Sous Chef',
    CHEF_DE_PARTIE: 'Chef de Partie',
    COMMIS_CHEF: 'Commis Chef',
  };

  // -------- WORKERS --------//

  const WORKERS = [
    { id: 1, name: 'John Doe', role: ROLES.CHEF, contractHours: 42 },
    { id: 2, name: 'Jane Smith', role: ROLES.JUNIOR_SOUS_CHEF, contractHours: 42 },
    { id: 3, name: 'Emily Johnson', role: ROLES.CHEF_DE_PARTIE, contractHours: 42 },
    { id: 4, name: 'Michael Brown', role: ROLES.COMMIS_CHEF, contractHours: 42 },
    { id: 5, name: 'David Wilson', role: ROLES.CHEF_DE_PARTIE, contractHours: 42 },
    { id: 6, name: 'Sarah Davis', role: ROLES.COMMIS_CHEF, contractHours: 42 },
    { id: 7, name: 'Olivia Martinez', role: ROLES.CHEF_DE_PARTIE, contractHours: 42 },
    { id: 8, name: 'James Anderson', role: ROLES.COMMIS_CHEF, contractHours: 42 },
  ];

  // -------- SHIFTS --------//

  const SHIFTS = [
    {
      name: 'Breakfast Shift',
      shiftId: 0,
      startTime: '04:30',
      endTime: '13:30',
      requiredRoles: {
        [ROLES.CHEF]: 1,
        [ROLES.JUNIOR_SOUS_CHEF]: 1,
        [ROLES.CHEF_DE_PARTIE]: 2,
        [ROLES.COMMIS_CHEF]: 3,
      },
    },
    {
      name: 'Middle Shift',
      shiftId: 1,
      startTime: '08:00',
      endTime: '17:00',
      requiredRoles: {
        [ROLES.CHEF]: 1,
        [ROLES.JUNIOR_SOUS_CHEF]: 1,
        [ROLES.CHEF_DE_PARTIE]: 2,
        [ROLES.COMMIS_CHEF]: 3,
      },
    },
    {
      name: 'Late Shift',
      shiftId: 2,
      startTime: '13:30',
      endTime: '22:30',
      requiredRoles: {
        [ROLES.CHEF]: 1,
        [ROLES.JUNIOR_SOUS_CHEF]: 1,
        [ROLES.CHEF_DE_PARTIE]: 2,
        [ROLES.COMMIS_CHEF]: 3,
      },
    },
  ];

  // -------- ASSIGNMENTS --------//



const ASSIGNMENTS = [
    { workerId: 1, shiftId: 0, date: '2026-10-26' }, // John Doe - Breakfast Shift
    { workerId: 2, shiftId: 0, date: '2026-10-26' }, // Jane Smith - Breakfast Shift
    { workerId: 3, shiftId: 0, date: '2026-10-26' }, // Emily Johnson - Breakfast Shift
    { workerId: 4, shiftId: 0, date: '2026-10-26' }, // Michael Brown - Breakfast Shift
    { workerId: 5, shiftId: 1, date: '2026-10-26' }, // David Wilson - Middle Shift
    { workerId: 6, shiftId: 1, date: '2026-10-26' }, // Sarah Davis - Middle Shift
    { workerId: 7, shiftId: 1, date: '2026-10-26' }, // Olivia Martinez - Middle Shift
    { workerId: 8, shiftId: 1, date: '2026-10-26' }, // James Anderson - Middle Shift
    { workerId: 1, shiftId: 2, date: '2026-10-27' }, // John Doe - Late Shift
    { workerId: 2, shiftId: 2, date: '2026-10-27' }, // Jane Smith - Late Shift
    { workerId: 3, shiftId: 2, date: '2026-10-27' }, // Emily Johnson - Late Shift
    { workerId: 4, shiftId: 2, date: '2026-10-27' }, // Michael Brown - Late Shift
    { workerId: 5, shiftId: 0, date: '2026-10-28' }, // David Wilson - Breakfast Shift
    { workerId: 6, shiftId: 0, date: '2026-10-28' }, // Sarah Davis - Breakfast Shift
    { workerId: 7, shiftId: 0, date: '2026-10-28' }, // Olivia Martinez - Breakfast Shift
    { workerId: 8, shiftId: 0, date: '2026-10-28' }, // James Anderson - Breakfast Shift
    { workerId: 1, shiftId: 0, date: '2026-10-28' }, // John: late on the 27th, breakfast on the 28th -> rest too short
    { workerId: 5, shiftId: 1, date: '2026-10-28' }, // David: breakfast + middle same day -> overlap
  ];

  // -------- FUNCTIONS --------//

  // All assignments of one worker on one day (always an array, [] if none).
  function getShiftsFor(workerId, date) {
    return ASSIGNMENTS.filter(
      (assignment) => assignment.workerId === workerId && assignment.date === date
    );
  }

  // ONE shift type (name, start, end, required roles) by its id.
  // find() returns the first match as an object, or undefined if nothing matches.
  function getShiftById(shiftId) {
    return SHIFTS.find((shift) => shift.shiftId === shiftId);
  }

  // -------- MANUAL TESTS (run: node app.js) --------//

  console.log('John, 27 ott (atteso: 1):', getShiftsFor(1, '2026-10-27'));
  console.log('John, 28 ott (atteso: 1):', getShiftsFor(1, '2026-10-28'));
  console.log('David, 28 ott (atteso: 2):', getShiftsFor(5, '2026-10-28'));
  console.log('Sarah, 27 ott (atteso: []):', getShiftsFor(6, '2026-10-27'));

  console.log('shift 0 (atteso: Breakfast):', getShiftById(0));
  console.log('shift 1 (atteso: Middle):', getShiftById(1));
  console.log('shift 2 (atteso: Late):', getShiftById(2));
  console.log('shift 99 (atteso: undefined):', getShiftById(99));
