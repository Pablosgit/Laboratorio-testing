import {mapProjectFromApiToVm} from "./project.mapper"
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe("Mapper tests", () => {
  it("should return object with empty data when feeding undefined project",() =>{
    // Arrange
    const project = undefined;
    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });
  it("should return object with empty data when feeding null project",() =>{
    // Arrange
    const project = null;
    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });
  it("should return object with empty data when feeding objet empty data project",() =>{
    // Arrange
    const project: apiModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    };
    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });
  it("should return one project with values when passing one project with values",() =>{
    // Arrange
    const project: apiModel.Project = {
      id: 'Test id',
      name: 'Test name',
      externalId: 'Test externalId',
      comments: 'Test comments',
      isActive: true,
      employees: [],
    };
    const expectedResult: viewModel.Project = {
      id: 'Test id',
      name: 'Test name',
      externalId: 'Test externalId',
      comments: 'Test comments',
      isActive: true,
      employees: [],
    };
    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });
  it("should return one project with employees values when passing one project with values",() =>{
    // Arrange
    const project: apiModel.Project = {
      id: 'Test id',
      name: 'Test name',
      externalId: 'Test externalId',
      comments: 'Test comments',
      isActive: false,
      employees: [
        {
          id: "Test employees id",
          isAssigned: true,
          employeeName: "Test employees employeeName",
        },
        {
          id: "Test employees id",
          isAssigned: true,
          employeeName: "Test employees employeeName",
        }
      ],
    };
    const expectedResult: viewModel.Project = {
      id: 'Test id',
      name: 'Test name',
      externalId: 'Test externalId',
      comments: 'Test comments',
      isActive: false,
      employees: [
        {
          id: "Test employees id",
          isAssigned: true,
          employeeName: "Test employees employeeName",
        },
        {
          id: "Test employees id",
          isAssigned: true,
          employeeName: "Test employees employeeName",
        }
      ],
    };
    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });
})
