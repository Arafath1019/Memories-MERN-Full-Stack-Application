import React from "react";
import {Grid, CircularProgress} from "@material-ui/core";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/lottie/groovyWalk.json";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";

function Posts({setCurrentId}) {
    const classes = useStyles();

    const posts = useSelector(state => state.posts);
  
  return (

    // Circular Progress Loading Animation
    // !posts.length ? <CircularProgress /> : (
    //   <Grid className={classes.container} container alignItems="stretch" spacing={3}>
    //     {
    //       posts.map((post) => (
    //         <Grid key={post._id} item xs={12} sm={6}>
    //           <Post post={post} setCurrentId={setCurrentId} />
    //         </Grid>
    //       ))
    //     }
    //   </Grid>
    // )

    // With lottie animation
    !posts.length ? <Lottie animationData={groovyWalkAnimation} height={400}
    width={400} /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {
          posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))
        }
      </Grid>
    )
  );
}

export default Posts;
