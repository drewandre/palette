import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
  slider: "Slider",
  sliderCircle: "Slider-circle",
  sliderBar: "Slider-bar",
  sliderProgress: "Slider-progress",
  sliderValue: "Slider-value",
  sliderLabel: "Slider-label"
}

const clamp = (min, max, value) => Math.max(min, Math.min(max, value))

class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPinching: false,
      y: 0,
      onChange: props.onChange,
      radius: props.radius,
      border: props.border,
      min: props.min,
      max: props.max
    }
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousemove", this.handleMouseMove)
    document.addEventListener("mouseup", this.handleMouseUp)
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.handleMouseMove)
    document.removeEventListener("mouseup", this.handleMouseUp)
  }

  handleMouseUp() {
    this.setState({ isPinching: false })
  };

  handleMouseDown(e) {
    const {
      top,
      height,
    } = this.potar.getBoundingClientRect()
    this.state.y = (top + height / 2) - e.pageY
    this.setState({ isPinching: true })
    e.preventDefault()
  };

  handleMouseMove(e) {
    if (this.state.isPinching) {
      const {
        top,
        height,
      } = this.potar.getBoundingClientRect()

      const {
        onChange,
        min,
        max,
        value,
      } = this.props

      const y = (top + height / 2) - e.pageY
      const dy = (y - this.state.y) / 100

      this.setState({ y: y });

      if (onChange) {
        onChange(clamp(min, max, value + dy * (max - min)))
      }
    }
  };

  render() {
    const {
      radius,
      border,
      min,
      max,
      origin,
      start,
      angle,
      value,
    } = this.props

    const diameter = 2 * radius
    const halfBorder = border / 2
    const length = (Math.PI + 2 * angle) * radius

    const percent = value < start ?
      Math.abs(value - start) / Math.abs(min - start) * (1 - origin) :
      Math.abs(value - start) / Math.abs(max - start) * origin

    const strokeDashoffset = value < start ?
      length * (percent + origin) :
      length * origin

    const strokeDasharray = `${ length * percent } ${ length * (1 - percent) }`
    const strokeWidth = border

    const cosine = Math.cos(angle)
    const sine = Math.sin(angle)
    const x = radius * (1 - cosine)
    const y = radius * (1 + sine)
    const shouldUse2Arcs = angle !== 0 && angle % (Math.PI / 2) === 0
    const d = `M ${ x } ${ y }
      ${ shouldUse2Arcs ? `A ${ radius } ${ radius } 0 1 1 ${ diameter - x } 0` : "" }
      A ${ radius } ${ radius } 0 ${ angle < 0 ? 0 : 1 } 1 ${ diameter - x } ${ y }`

    return (
      <svg
        ref={ (potar) => this.potar = potar }
        className={ styles.slider }
        viewBox={ `${ -halfBorder } ${ -halfBorder } ${ diameter + border } ${ diameter + border }` }
        onMouseDown={ this.handleMouseDown }
        id={this.props.id}
        >
        <circle
          className={ styles.sliderCircle }
          r={ radius - halfBorder }
          cx={ radius }
          cy={ radius }
        />
        <text
          className={styles.sliderValue}
          x='48%'
          y='57%'
          textAnchor='middle'
        >
          {this.props.fixedSliderValue ? this.props.fixedSliderValue.toFixed(0) : null }
        </text>
        <path
          className={ styles.sliderBar }
          style={{ strokeWidth }}
          d={ d } />
        <path
          className={ styles.sliderProgress }
          style={{
            strokeWidth,
            strokeDashoffset,
            strokeDasharray,
          }}
          d={ d } />
        <text
          className={styles.sliderLabel}
          x='48%'
          y='80%'
          textAnchor='middle'
        >
        {this.props.label}
        </text>
      </svg>
    )
  }
}

Slider.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number,
  fixedSliderValue: PropTypes.number,
  label: PropTypes.string
};

Slider.defaultProps = {
  radius: 60,
  border: 5,
  min: -50,
  max: 50,
  angle: Math.PI / 4,
  origin: 0.5,
  start: 0,
  value: 0,
  fixedSliderValue: 0
};

export default Slider;
