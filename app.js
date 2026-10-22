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
