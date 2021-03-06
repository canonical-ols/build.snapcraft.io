import expect from 'expect';

import repository from '../../../../../../src/common/reducers/entities/repository.js';
import * as fixtures from './fixtures.js';

describe('repository entities', function() {

  context('update entity reducer', function() {

    let state;

    beforeEach(function() {
      state = repository(undefined, {
        type: 'REPO_ADD_REQUEST',
        payload: fixtures.repoPayload
      });
    });

    it('should update state on REPO_ADD_REQUEST', function() {
      expect(state).toEqual(fixtures.repoAddState);
    });

    it('should update state on REPO_ADD_SUCCESS', function() {
      expect(repository(state, {
        type: 'REPO_ADD_SUCCESS',
        payload: fixtures.repoPayload
      })).toEqual(fixtures.repoSuccessState);
    });

    it('should update state on REPO_ADD_FAILURE', function() {
      expect(repository(state, {
        type: 'REPO_ADD_FAILURE',
        payload: {
          ...fixtures.repoPayload,
          error: fixtures.repoFailureState.error
        }
      })).toEqual(fixtures.repoFailureState);
    });

    it('should reset state on REPO_RESET', function() {
      expect(repository(state, {
        type: 'REPO_RESET',
        payload: fixtures.repoPayload
      })).toEqual(fixtures.repoResetState);
    });

    it('should toggle selected on REPO_TOGGLE_SELECT', function() {
      const state = repository(fixtures.initialState, {
        type: 'REPO_TOGGLE_SELECT',
        payload: fixtures.repoPayload
      });

      expect(state.isSelected).toBe(true);
    });
  });
});
