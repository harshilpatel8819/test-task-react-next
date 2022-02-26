import Link from "next/link";
import {
  AvatarGroup,
  Avatar,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Layout from "components/LayOut";
import styles from "styles/Home.module.css";
import Card from "components/Card";

import { NextPage } from "next/types";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Layout>
      <Container className={styles.container}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card className={styles.contactCard}>
              <Typography className={styles.contactCardHeading}>
                Contacts
                <Link passHref href="/contacts">
                  <Image
                    src="/images/Arrow.svg"
                    width={16}
                    height={16}
                    alt="arrow"
                  />
                </Link>
              </Typography>
              <AvatarGroup max={4} spacing={10} sx={{ marginTop: "15px" }}>
                <Avatar alt="Jay" src="images/Avatar.jpg" />
                <Avatar alt="Shiv" src="/images/Ellipse1.svg" />
                <Avatar alt="Mahadev" src="/images/Avatar.jpg" />
                <Avatar alt="Vaibhav" src="/images/Ellipse1.svg" />
              </AvatarGroup>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={styles.webCard}>
              <Typography className={styles.webCardHeading}>
                web3 Apps
                <Link passHref href="/">
                  <Image
                    src="/images/ArrowWhite.svg"
                    width={16}
                    height={16}
                    alt="arrow"
                  />
                </Link>
              </Typography>
              <Button className={styles.webCardButton} variant="contained">
                32 Connected
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
export default Home;
