import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import { Student } from './Student';

jest.mock('axios');

const mockStudents = [
  {
    "id": 1,
    "name": "Ihor",
    "surname": "Sikorsky",
    "course": "3",
    "group": "KA-12",
    "habari": 5000
  },
  {
    "id": 2,
    "name": "John",
    "surname": "Doe",
    "course": "2",
    "group": "CS-11",
    "habari": 4500
  },
  {
    "id": 3,
    "name": "Jane",
    "surname": "Smith",
    "course": "1",
    "group": "IT-09",
    "habari": 4800
  },
  {
    "id": 4,
    "name": "Alice",
    "surname": "Johnson",
    "course": "3",
    "group": "KA-12",
    "habari": 5200
  },
  {
    "id": 5,
    "name": "Bob",
    "surname": "Williams",
    "course": "2",
    "group": "CS-11",
    "habari": 4900
  },
  {
    "id": 6,
    "name": "Emily",
    "surname": "Brown",
    "course": "1",
    "group": "IT-09",
    "habari": 5100
  },
  {
    "id": 7,
    "name": "Michael",
    "surname": "Miller",
    "course": "3",
    "group": "KA-12",
    "habari": 5300
  },
  {
    "id": 8,
    "name": "David",
    "surname": "Taylor",
    "course": "2",
    "group": "CS-11",
    "habari": 4700
  },
  {
    "id": 9,
    "name": "Emma",
    "surname": "Wilson",
    "course": "1",
    "group": "IT-09",
    "habari": 5200
  },
  {
    "id": 10,
    "name": "Andrew",
    "surname": "Anderson",
    "course": "3",
    "group": "KA-12",
    "habari": 5100
  },
  {
    "id": 11,
    "name": "Olivia",
    "surname": "Martinez",
    "course": "2",
    "group": "CS-11",
    "habari": 4800
  },
  {
    "id": 12,
    "name": "James",
    "surname": "Hernandez",
    "course": "1",
    "group": "IT-09",
    "habari": 4900
  },
  {
    "id": 13,
    "name": "Isabella",
    "surname": "Garcia",
    "course": "3",
    "group": "KA-12",
    "habari": 5400
  },
  {
    "id": 14,
    "name": "William",
    "surname": "Lopez",
    "course": "2",
    "group": "CS-11",
    "habari": 4600
  },
  {
    "id": 15,
    "name": "Sophia",
    "surname": "Gonzalez",
    "course": "1",
    "group": "IT-09",
    "habari": 5000
  },
  {
    "id": 16,
    "name": "Jacob",
    "surname": "Rodriguez",
    "course": "3",
    "group": "KA-12",
    "habari": 5500
  },
  {
    "id": 17,
    "name": "Charlotte",
    "surname": "Wilson",
    "course": "2",
    "group": "CS-11",
    "habari": 4700
  },
  {
    "id": 18,
    "name": "Mia",
    "surname": "Thomas",
    "course": "1",
    "group": "IT-09",
    "habari": 5100
  },
  {
    "id": 19,
    "name": "Benjamin",
    "surname": "Moore",
    "course": "3",
    "group": "KA-12",
    "habari": 5600
  },
  {
    "id": 20,
    "name": "Ethan",
    "surname": "Jackson",
    "course": "2",
    "group": "CS-11",
    "habari": 4800
  }
];

describe('Student component', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockStudents });
  });

  it('renders student data', async () => {
    render(<Student />);
    
    await waitFor(() => {
      expect(screen.getAllByTestId('mate')).toHaveLength(mockStudents.length);
    });
  });

  it('displays error message if API call fails', async () => {
    const errorMessage = 'Error fetching data';
    axios.get.mockRejectedValue(new Error(errorMessage));

    render(<Student />);
    
    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });
});
