import React from 'react'
import styled, { css } from 'react-emotion'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const position = css`
  left: 50%;
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  width: 100%;
`

const enter = css`
  ${position} opacity: 0.01;
`

const enterActive = css`
  opacity: 1;
  transition: opacity 2000ms ease-in;
`

const exit = css`
  ${position} opacity: 1;
  z-index: 100;
`

const exitActive = css`
  ${position} opacity: 0.01;
  transition: opacity 2000ms ease-out;
  z-index: 100;
`

const TransitionWrapper = styled('div')`
  margin: 0;
`

class TransitionHandler extends React.Component {
  shouldComponentUpdate() {
    return this.props.location.pathname === window.location.pathname
  }

  render() {
    return this.props.children
  }
}

const PageTransition = ({ children, location }) => (
  <TransitionGroup>
    <CSSTransition
      // During SSR no location is set; this ensures the first transition works.
      key={location ? location.pathname : '/'}
      classNames={{ enter, enterActive, exit, exitActive }}
      timeout={{ enter: 2000, exit: 2000 }}
    >
      <TransitionHandler location={location}>
        {/* This div receives the classes for transitioning. */}
        <TransitionWrapper>{children}</TransitionWrapper>
      </TransitionHandler>
    </CSSTransition>
  </TransitionGroup>
)

export default PageTransition
