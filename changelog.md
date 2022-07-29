# Changelog

## [Unreleased]
## [0.0.23] - 29.07.2022
### Added
- Extended assessement varying by area and item
- gamification of showing students status
- small motivation for students to search help in other students
## [0.0.22] - 29.07.2022
### Added
- DrawItem Feedback
## [0.0.21] - 29.07.2022
### Added
- Creation of StudentTrainingAction
### Changed
- Autocorrection
### Removed
## [0.0.20] - 27.07.2022
### Added
- Added metadata on items: hint,difficulty,area,
- Added new StudentTrainingAction with values for indepth e assessment
- Modified items to fit new schema, reworked the not well fitting questions
- Added testset of StudentTrainingAction to show Assessement
### Changed
- worked on Short Text to show color.
### Removed
## [0.0.19] - 25.07.2022
### Added
- Type message on exercise finished, raw
### Changed

### Removed
## [0.0.18] - 25.07.2022
### Added
- Correction components for 5 Itemtypes
- check for complete answer to offer feedback text
### Changed
- fixed storing of data
- fixed feedback bugs
### Removed
## [0.0.17] - 25.07.2022
### Added
- merged Branches with all Item Types
- created feedback for applicable item types
### Changed
### Removed
## [0.0.16] - 25.07.2022
### Added
- feedback for ClosedText and MultipleChoice
- dashboard for student showing exercise activities, overall score, and items variety
### Changed
- Umultiple choice can now occur in multiple instances
### Removed
- All `console.log()` statements were removed or commented out.

## [0.0.15] - 21.07.2022
### Added
- Timeline and timeline comparison.
- Training site for a single training.
- Result site for a single training.
- `.gitignore` for the database.
- Analysis of training actions was added.
### Changed
- Updated all dependencies.
- Items were moved to the single trainings site.
- Unstyled items were removed.
- Updated the progress page.
- Extended the statistics collection.
### Removed
- All `console.log()` statements were removed or commented out.

## [0.0.14] - 05.07.2022
### Changed
- Various changes and fixes regard the previous commits.

## [0.0.13] - 05.07.2022
### Changed
- `api/training.post.js` will now correct the `MultipleChoice` element.

## [0.0.12] - 05.07.2022
### Changed
- Merged into the `master` branch.
### Fixed
- Various fixes regarding styling and implementation.

## [0.0.11] - 01.07.2022
### Added
- `d3` to have a look at the charts.
- `BarChart`, `DoughnutChart` and `RadarChart` as components.
- `BannerComponent` to display information in the dashboard.
- `prof/analysis` to display warnings and suggestions from the automated analysis.
- `prof/progress` page for our presentation.
### Changed
- Both dashboards were changed to remove unused parts.
- `prof/dashboard` now displays the different statistics and warnings from the analysis.

## [0.0.10] - 29.06.2022
### Added
- `training/[id].vue` to view the training results.
- `btn` and `btn-primary` classes.
- `Trainings`, `TrainingSubmissions` and `TrainingResults` to the db schema.
### Changed
- Updated all dependencies.
- `api/training.post.js` will now correct the `ClosedText` element.
- `FormComponent` will now redirect to the results page.
- Disabled nuxt telemetry.

## [0.0.9] - 28.06.2022
### Added
- `FormComponent` to create forms to send to the server.
- `api/training.post.js` to automatically check the answers.
### Changed
- `ClosedText` now also utilizes the index of the form.

## [0.0.8] - 27.06.2022
### Changed
- Changes in `package-lock.json`.
- `schema.prisma` removed table column of `mutlipleChoice`.
- `student/training` modified `MultipleChoice` component in training. 
- `MultipleChoice` reworked component to use for multiple choice questions with db connection.
-  Seed for seeding the database with reworked initial data mutlipleChoice.
- `server/api/mutlipleChoice` reworked route to return `multipleChoice` with given id and updated database table.

## [0.0.7] - 27.06.2022
### Changed
- Changes in `package-lock.json`.

## [0.0.6] - 27.06.2022
### Added
- `server/api/mutlipleChoice` route to return `multipleChoice` with given id.
### Changed
- `MultipleChoice` component to use for multiple choice questions with db connection.
- `student/training` added `MultipleChoice` component in training. 
- Seed for seeding the database with initial data mutlipleChoice.

## [0.0.5] - 27.06.2022
### Changed
- Updated `nuxt` to `^3.0.0-rc.4`.

## [0.0.4] - 24.06.2022
### Added
- Seeds for seeding the database with initial data.
- `InfoCard` component to display information.
- `prof/statistics` page to display statistics.
- `statistics` component to track page visits.
### Changed
- Student and prof dashboard components are now in a separate folder.
- `student/training` page now has information regarding the training and a list of exercise sheets.

## [0.0.3] - 22.06.2022
### Added
- `ideas.md` foe collecting ideas.
- SQLite Database for storing data.
- `ClosedText` component with db connection.
- `server/api/closedText` route to return `closedText` with given id.
### Changed
- Updated the Student Dashboard

## [0.0.2] - 04.06.2022
### Added
- Dashboard for Profs.
### Changed
- Changed login forms.

## [0.0.1] - 02.06.2022
### Added
- Dashboard for Students.
### Changed
- Upgraded to nuxt 3.

## [0.0.0] - 01.06.2022
### Init
- Basic skeleton with nuxt(vue) and tailwindcss.
- Component based prototyping.
- ExpressJS will be added later.

---

# Template

## [0.0.0] - 00.00.0000
### Added
### Changed
### Fixed
### Removed
