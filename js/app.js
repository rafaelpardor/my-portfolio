particlesJS('particles-js',

  {
    'particles': {
      'number': {
        'value': 50,
        'density': {
          'enable': true,
          'value_area': 800
        }
      },
      'color': {
        'value': '#48da9b'
      },
      'shape': {
        'type': 'circle',
        'stroke': {
          'width': 0,
          'color': '#000000'
        },
        'polygon': {
          'nb_sides': 5
        },
        'image': {
          'src': 'img/github.svg',
          'width': 50,
          'height': 50
        }
      },
      'opacity': {
        'value': 0.5,
        'random': false,
        'anim': {
          'enable': false,
          'speed': 1,
          'opacity_min': 0.1,
          'sync': false
        }
      },
      'size': {
        'value': 4.5,
        'random': true,
        'anim': {
          'enable': false,
          'speed': 40,
          'size_min': 2.0,
          'sync': false
        }
      },
      'line_linked': {
        'enable': true,
        'distance': 170,
        'color': '#fff',
        'opacity': 0.5,
        'width': 0.6
      },
      'move': {
        'enable': true,
        'speed': 2,
        'direction': 'none',
        'random': false,
        'straight': false,
        'out_mode': 'out',
        'attract': {
          'enable': false,
          'rotateX': 1000,
          'rotateY': 1200
        }
      }
    },
    'interactivity': {
      'detect_on': 'canvas',
      'events': {
        'onhover': {
          'enable': true,
          'mode': 'repulse'
        },
        'onclick': {
          'enable': true,
          'mode': 'push'
        },
        'resize': true
      },
      'modes': {
        'grab': {
          'distance': 400,
          'line_linked': {
            'opacity': 1
          }
        },
        'bubble': {
          'distance': 400,
          'size': 40,
          'duration': 2,
          'opacity': 8,
          'speed': 3
        },
        'repulse': {
          'distance': 100
        },
        'push': {
          'particles_nb': 4
        },
        'remove': {
          'particles_nb': 2
        }
      }
    },
    'retina_detect': true,
    'config_demo': {
      'hide_card': false,
      'background_image': '',
      'background_position': '50% 50%',
      'background_repeat': 'no-repeat',
      'background_size': 'cover'
    }
  }

)