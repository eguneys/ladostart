// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
} from "solid-start";
import { useLocation, Link, NavLink } from 'solid-start'
import { createEffect } from 'solid-js'
import './site.css'

export default function Root() {

  let $topnav_toggle
  let location = useLocation()

  createEffect(() => {
		location.pathname;
		$topnav_toggle.checked = false
	})


  return (
    <Html lang="en">
      <Head>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/"/>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&Fredoka:wght@300&display=swap" rel="stylesheet"/>
        <style>
    {`
    body, input {
        padding: 0;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        background: hsl(0deg, 0%, 40%);
        color: white;
    }

    #app {
        font-size: 1em;
        width: 100%;
        height: 100%;
        margin: auto;
        position: relative;
    }
    `}
    </style>
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>

     <solsido>
      <header>
        <input ref={$topnav_toggle} class="topnav-toggle fullscreen-toggle" type="checkbox" id="tn-tg"></input>
        <label for="tn-tg" class="fullscreen-mask"></label>
        <label for="tn-tg" class="hbg"> <span class="hbg_in"></span></label>
        <nav id="topnav">
          <section><NavLink href="/">lasolsido.org</NavLink></section>
          <section> <NavLink href="/rhythm">Rhythm</NavLink> </section>
          <section> <NavLink href="/key">Key Signatures</NavLink> </section>
          
        </nav>
        <h1 class='site-title'>
          <NavLink href={location.pathname}>{location.pathname}</NavLink>
        </h1>
      </header>
      <div id='main-wrap'>

            <Routes>
              <FileRoutes />
            </Routes>

		</div>
		</solsido>


          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
