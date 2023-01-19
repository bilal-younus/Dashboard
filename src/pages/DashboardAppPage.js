import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import {useState} from "react";
// @mui
import { useTheme } from '@mui/material/styles';
import {Grid, Container, Typography, Button, Stack,CardActionArea} from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
// import {ProductFilterSidebar, ProductSort} from "../sections/@dashboard/products";
import {ProductSort, ProductFilterSidebar, ProductList, ProductCartWidget} from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';
import UserPage from "./UserPage";


// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();


        const [openFilter, setOpenFilter] = useState(false);

        const handleOpenFilter = () => {
            setOpenFilter(true);
        };

        const handleCloseFilter = () => {
            setOpenFilter(false);
        };




        return (
    <>
      <Helmet>
        <title> Dashboard </title>
      </Helmet>

      <Container maxWidth="xl">
          <Button variant="outlined" color="secondary" className="me-3" style={{ display: 'flex', justifyContent: 'flex-end' }} >
              Filter By
          </Button>


          <Button variant="contained" color="error" className="me-3" style={{ display: 'flex', justifyContent: 'flex-end' }} >
              TQM
          </Button>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Weekly Sales" total={714000} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="New Users" total={1352831} color="info" icon={'ant-design:apple-filled'} />
          </Grid>


          <Grid item xs={12} sm={6} md={6}>
              <AppWebsiteVisits
                  title="Website Visits"
                  subheader="(+43%) than last year"
                  chartLabels={[
                      '01/01/2003',
                      '02/01/2003',
                      '03/01/2003',
                      '04/01/2003',
                      '05/01/2003',
                      '06/01/2003',
                      '07/01/2003',
                      '08/01/2003',
                      '09/01/2003',
                      '10/01/2003',
                      '11/01/2003',
                  ]}
                  chartData={[
                      {
                          name: 'Team A',
                          type: 'column',
                          fill: 'solid',
                          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                      },
                      {
                          name: 'Team B',
                          type: 'area',
                          fill: 'gradient',
                          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                      },
                      {
                          name: 'Team C',
                          type: 'line',
                          fill: 'solid',
                          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                      },
                  ]}
              />
          </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <AppWidgetSummary title="Christina Ambrosia" total={53678} icon={'ant-design:android-filled'} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <AppWidgetSummary title="Alex Williams" total={42335} icon={'ant-design:android-filled'} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <AppWidgetSummary title="Bilal Younud" total={12445} icon={'ant-design:android-filled'} />
                </Grid>

            </Grid>

           <UserPage/>


        </Grid>
      </Container>
    </>
  );
}
