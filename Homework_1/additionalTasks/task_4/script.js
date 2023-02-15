const age = parseInt(prompt("Введіть будь ласка вік дитини", ""));

const KINDERGARTEN_START_AGE = 3;
const SCHOOL_START_AGE = 6;
const UNIVERSITY_START_AGE = 17;
const LENGTH_STUDY_AT_UNIVERSITY = 6;

const countYearsBeforeKindergarten =
    KINDERGARTEN_START_AGE - age < 0 ? 0 : KINDERGARTEN_START_AGE - age;
const countYearsBeforeStartedSchool =
    SCHOOL_START_AGE - age < 0 ? 0 : SCHOOL_START_AGE - age;
const countYearsBeforeStartedUniversity =
    UNIVERSITY_START_AGE - age < 0 ? 0 : UNIVERSITY_START_AGE - age;
const countYearsBeforeFinishedUniversity =
    UNIVERSITY_START_AGE + LENGTH_STUDY_AT_UNIVERSITY - age < 0
        ? 0
        : UNIVERSITY_START_AGE + LENGTH_STUDY_AT_UNIVERSITY - age;

document.write(`
    Ваша дитина ${
        countYearsBeforeKindergarten === 0
            ? "вже завершила садик"
            : `піде у садик через ${countYearsBeforeKindergarten} років`
    }.<br>
    ${
        countYearsBeforeStartedSchool === 0
            ? "Також вона вже розпочала навчання у школі"
            : `У школу піде через ${countYearsBeforeStartedSchool} років`
    } і ${
    countYearsBeforeStartedUniversity === 0
        ? "завершила її."
        : `закінчить її через ${countYearsBeforeStartedSchool} років.<br>`
}
    ${
        countYearsBeforeStartedUniversity === 0
            ? "Також вона вже вступила до університету"
            : `В університет вона має вступити через ${countYearsBeforeStartedUniversity} років`
    } і ${
    countYearsBeforeFinishedUniversity === 0
        ? "завершила його."
        : `завершить його через ${countYearsBeforeFinishedUniversity} років.`
}
`);
