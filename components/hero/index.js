import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Image from 'next/image';
// import PropTypes from 'prop-types';
import React from 'react';
import Typewriter from 'typewriter-effect';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage:
      'url(https://images.unsplash.com/photo-1492446190781-58ac4285911d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1294&q=80)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    // height: 350
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function MainFeaturedPost() {
  const classes = useStyles();
  const name = 'Vinnie.'

  return (
    <Paper
      className={classes.mainFeaturedPost}
      //  style={{ backgroundImage: `url(${post.image})` }}
    >
      {/* <div style={{ }}>  */}
      {/* <Image 
    //   style={{ display: 'none' }}
       src='/img/consult.jpeg' 
       height={500}
       width={500}
       layout='responsive'
       /> */}
      {/* </div> */}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component='h1'
              variant='h5'
              color='inherit'
              gutterBottom
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(`Hi! I'm <strong style="color: blue;">${name}</strong>`)
                    .pauseFor(500)
                    .deleteAll()
                    .typeString('<span style="color: blue;">I am a </span>')
                    .typeString('<strong>Full Stack Developer.</strong>')
                    .pauseFor(500)
                    .deleteChars(21)
                    .typeString('Gamer.')
                    .pauseFor(500)
                    .deleteChars(6)
                    .typeString('Musician.')
                    .pauseFor(500)
                    .deleteChars(9)
                    .typeString('Reader.')
                    .pauseFor(500)
                    .deleteChars(7)
                    .typeString('Coder.')
                    .pauseFor(500)
                    .deleteChars(6)
                    .typeString('Traveler.')
                    .pauseFor(500)
                    .deleteChars(9)
                    .typeString('Son.')
                    .pauseFor(500)
                    .deleteChars(4)
                    .typeString('Brother.')
                    .pauseFor(500)
                    .deleteChars(8)
                    .typeString('Teacher.')
                    .pauseFor(500)
                    .deleteChars(10)
                    .typeString('Me!')
                    .pauseFor(500)
                    .deleteAll()
                    .typeString('Welcome to my page...')
                    .pauseFor(500)
                    .deleteAll()
                    .start();
                }}
                options={{
                  loop: true,
                  cursor: " :)",

                }}
              />
            </Typography>

            {/* <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link> */}
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

// MainFeaturedPost.propTypes = {
//   post: PropTypes.object,
// };
