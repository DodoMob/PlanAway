import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CalendarView from '../components/CalendarView';
import TripInformation from '../components/TripInformation';
import './MyPlanAway.css';

function MyPlanAway({ auth, plans }) {
  return (
    <div>
      <div className="overflow-scroll">
        <h1>Hello it is the MyPlanAway page</h1>
        {auth
          ? (
            <div className="flex-wrap">
              {[...new Array(12)].map((m, i) => <CalendarView month={new Date(2020, i, 1)} />)}
            </div>
          )
          : <Redirect to="/account/login" />}
      </div>
      <div>
        {plans.map((plan) => <TripInformation plan={plan} />)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.isAuth,
  plans: state.userData.plans,
});

MyPlanAway.propTypes = {
  auth: PropTypes.bool.isRequired,
  plans: PropTypes.objectOf().isRequired,
};

export default connect(mapStateToProps)(MyPlanAway);
