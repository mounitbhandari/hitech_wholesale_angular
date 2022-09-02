

export class Student{
  studentId?: number;
  episodeId?: number;
  studentName?: string;
  billingName?: string;
  fatherName?: string;
  motherName?: string;
  guardianName?: string;
  relationToGuardian?: string;
  dob?: string;
  sex?: string;
  address?: string;
  city?: string;
  district?: string;
  stateId?: string;
  pin?: string;
  state?: {
    stateId?: string;
    stateName?: string;
    stateCode?: string;
  };
  guardianContactNumber?: string;
  whatsappNumber?: string;
  email?: string;
  qualification?: string;
}
