class BenefitOffering {
    constructor(effectiveDate, expirationDate) {
      this.effectiveDate = effectiveDate;
      this.expirationDate = expirationDate;
    }
    
    getEffectiveDate() {
      return this.effectiveDate;   
    }
    
    getExpirationDate() {
      return this.expirationDate;
    }
  }
  
  class Enrollment {
    constructor(enrollStartDate, enrollDeadline, benefitsActiveDate, employeeId, benefitOfferings) {
      this.enrollStartDate = enrollStartDate;
      this.enrollDeadline = enrollDeadline;
      this.benefitsActiveDate = benefitsActiveDate;
      this.employeeId = employeeId;
      this.benefitOfferings = benefitOfferings;
    }
  }
  
  class Employee {
    constructor(id, eligibleDateRanges) {
      this.id = id;
      this.eligibleDateRanges = eligibleDateRanges
    }
    
    getEligibleDateRanges() {
        return this.eligibleDateRanges;
    }
    
    getId() {
        return this.id;
    }
  }
  
  class OpenEnrollmentWindow {
    constructor(startDate, endDate, benefitOfferings) {
      this.benefitOfferings = benefitOfferings;
      this.startDate = startDate;
      this.endDate = endDate;
    }
    
    getBenefitOfferings() {
        return this.benefitOfferings;
    }
    
    getStartDate() {
        return this.startDate;
    }
    
    getEndDate() {
        return this.endDate;
    }
  }
  
  class EligibleDateRange {
    constructor(startDate, endDate) {
      this.startDate = startDate;
      this.endDate = endDate;
    }
    
    getStartDate() {
        return this.startDate;
    }
    
    getEndDate() {
        return this.endDate;
    }
  }
  
  function _convertDate(date) {
      return new Date(date) / 1000;
  }
  function compute_enrollments_for_open_enrollment_window(employee, windowEnrollment) {
      const eligibleDateRanges = employee.getEligibleDateRanges();
      const employeeId = employee.getId();
      const windowStartDate = windowEnrollment.getStartDate();
      const windowEndDate = windowEnrollment.getEndDate();
      const benefitOfferings = windowEnrollment.getBenefitOfferings();
      let j = 0;
      const arrResult = [];
      if (eligibleDateRanges.length === 0) {
          return [];
      }
      while(j < benefitOfferings.length) {
          for (let i = 0; i < eligibleDateRanges.length; i++) {
              const eligibleDateRange = eligibleDateRanges[i];
              const startDate = eligibleDateRange.getStartDate();
              const endDate = eligibleDateRange.getEndDate();
              const convertStartDate = _convertDate(startDate);
              console.log('>>>start', convertStartDate);
              const convertEffectiveDate = _convertDate(benefitOfferings[j].getEffectiveDate());
              console.log('>>>effective', convertEffectiveDate);
              const convertExpDate = _convertDate(benefitOfferings[j].getExpirationDate());
              console.log('>>>> exp', convertExpDate);
              if (convertStartDate >= convertEffectiveDate && convertStartDate <= convertExpDate) {
                  // start enrolling
                  arrResult.push(new Enrollment(
                      benefitOfferings[j].getEffectiveDate(),
                      new Date(Math.min(new Date(endDate).getTime()/1000, new Date(benefitOfferings[j].getExpirationDate()).getTime()/1000) * 1000), 
                      benefitOfferings[j].getEffectiveDate(), 
                      employeeId,
                      benefitOfferings[j]));
                  j++;
              }
          }
          j++;
      }
      return arrResult;
      // return [Enrollment(enrollStartDate, enrollDeadline, benefitsActiveDate, employeeId, benefitOfferings)];
  }
  
  const eligibleDateRanges = [
      // new EligibleDateRange("10-1-2021", "10-15-2021"),
      new EligibleDateRange("11-1-2021", "11-15-2021")
  ];
  const employee = new Employee(1, eligibleDateRanges);
  const benefitOfferings = [
      new BenefitOffering("11-1-2021", "11-2-2022")
  ];
  const windowEnrollment = new OpenEnrollmentWindow("10-1-2021", "10-20-2021", benefitOfferings);
  
  console.log(compute_enrollments_for_open_enrollment_window(employee, windowEnrollment));
  
  // 1. Eligibility end and start dates are before benefti offering end and start dates
  // 2. Eligiblity start date falls inside the benefit offering start and end dates
  // 3. Eligiblity start date falls after the benefit offering start and end dates
  
  // class OpenEnrollmentWindowController < ApplicationController
  //   def create_new
  //     window = OpenEnrollmentWindow.create_for_company(company)
  
  //     company.employees.each do |employee|
  //       new_enrollments = EnrollmentCalculator.compute_enrollments_for_open_enrollment_window(employee, window)
  //       computed_enrollment_changes = EnrollmentCalculator.diff(new_enrollments, employee.enrollments)
  //       computed_enrollment_changes.persist!
  //     end
  //   end
  // end