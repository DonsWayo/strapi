/**
 *
 * Admin
 *
 */

import React, { lazy, Suspense, useEffect } from 'react';

import { LoadingIndicatorPage, useTracking } from '@strapi/helper-plugin';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import GuidedTourModal from '../../components/GuidedTour/Modal';
import { useMenu } from '../../hooks';
import AppLayout from '../../layouts/AppLayout';
import { SET_APP_RUNTIME_STATUS } from '../App/constants';



const HomePage = lazy(() => import(/* webpackChunkName: "Admin_homePage" */ '../HomePage'));


// Simple hook easier for testing
/**
 * TODO: remove this, it's bad.
 */
const useTrackUsage = () => {
  const { trackUsage } = useTracking();
  const dispatch = useDispatch();
  const appStatus = useSelector((state) => state.admin_app.status);

  useEffect(() => {
    // Make sure the event is only send once after accessing the admin panel
    // and not at runtime for example when regenerating the permissions with the ctb
    // or with i18n
    if (appStatus === 'init') {
      trackUsage('didAccessAuthenticatedAdministration');

      dispatch({ type: SET_APP_RUNTIME_STATUS });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appStatus]);
};

const Admin = () => {
  useTrackUsage();
  const { isLoading } = useMenu();



  if (isLoading) {
    return <LoadingIndicatorPage />;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <AppLayout
       
      >
        <Suspense fallback={<LoadingIndicatorPage />}>
          <Switch>
            <Route path="/" component={HomePage} exact />
          </Switch>
        </Suspense>
        <GuidedTourModal />

      </AppLayout>
    </DndProvider>
  );
};

export default Admin;
export { useTrackUsage };
