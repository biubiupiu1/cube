module.exports = [
  {
    "__type__": "cc.Texture2D",
    "content": "1,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.EffectAsset",
    "_name": "builtin-2d-spine",
    "techniques": [
      {
        "passes": [
          {
            "blendState": {
              "targets": [
                {
                  "blend": true
                }
              ]
            },
            "rasterizerState": {
              "cullMode": 0
            },
            "program": "builtin-2d-spine|vs|fs",
            "properties": {
              "texture": {
                "value": "white",
                "type": 29
              },
              "alphaThreshold": {
                "value": [
                  0.5
                ],
                "type": 13
              }
            }
          }
        ]
      }
    ],
    "shaders": [
      {
        "hash": 2278723298,
        "glsl3": {
          "vert": "\nprecision highp float;\nuniform CCGlobal {\n  vec4 cc_time;\n\n  vec4 cc_screenSize;\n\n  vec4 cc_screenScale;\n\n  vec4 cc_nativeSize;\n\n  mat4 cc_matView;\n  mat4 cc_matViewInv;\n  mat4 cc_matProj;\n  mat4 cc_matProjInv;\n  mat4 cc_matViewProj;\n  mat4 cc_matViewProjInv;\n  vec4 cc_cameraPos;\n\n  vec4 cc_exposure;\n\n  vec4 cc_mainLitDir;\n\n  vec4 cc_mainLitColor;\n\n  vec4 cc_ambientSky;\n  vec4 cc_ambientGround;\n};\nuniform CCLocal {\n  mat4 cc_matWorld;\n  mat4 cc_matWorldIT;\n};\n\nin vec3 a_position;\nin vec4 a_color;\n#if USE_TINT\n  in vec4 a_color0;\n#endif\n\nin vec2 a_uv0;\nout vec2 v_uv0;\n\nout vec4 v_light;\n#if USE_TINT\n  out vec4 v_dark;\n#endif\n\nvoid main () {\n  mat4 mvp;\n  \n  #if CC_USE_MODEL\n    mvp = cc_matViewProj * cc_matWorld;\n  #else\n    mvp = cc_matViewProj;\n  #endif\n\n  v_uv0 = a_uv0;\n\n  v_light = a_color;\n  #if USE_TINT\n    v_dark = a_color0;\n  #endif\n\n  gl_Position = mvp * vec4(a_position, 1);\n}\n\n",
          "frag": "\nprecision highp float;\n\nuniform sampler2D texture;\nin vec2 v_uv0;\n\nin vec4 v_light;\n#if USE_TINT\n  in vec4 v_dark;\n#endif\n\n#if USE_ALPHA_TEST\n  \n  uniform ALPHA_TEST {\n    float alphaThreshold;\n  }\n#endif\n\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\n\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\n\nvoid main () {\n  vec4 texColor = texture2D(texture, v_uv0);\n  #if CC_USE_ALPHA_ATLAS_TEXTURE\n      texColor.a *= texture2D(texture, v_uv0 + vec2(0, 0.5)).r;\n  #endif\n  vec4 finalColor;\n\n  #if USE_TINT\n    finalColor.a = v_light.a * texColor.a;\n    finalColor.rgb = ((texColor.a - 1.0) * v_dark.a + 1.0 - texColor.rgb) * v_dark.rgb + texColor.rgb * v_light.rgb;\n  #else\n    finalColor = texColor * v_light;\n  #endif\n\n  ALPHA_TEST(finalColor);\n\n  gl_FragColor = finalColor;\n}\n\n"
        },
        "glsl1": {
          "vert": "\nprecision highp float;\nuniform mat4 cc_matViewProj;\nuniform mat4 cc_matWorld;\n\nattribute vec3 a_position;\nattribute vec4 a_color;\n#if USE_TINT\n  attribute vec4 a_color0;\n#endif\n\nattribute vec2 a_uv0;\nvarying vec2 v_uv0;\n\nvarying vec4 v_light;\n#if USE_TINT\n  varying vec4 v_dark;\n#endif\n\nvoid main () {\n  mat4 mvp;\n  \n  #if CC_USE_MODEL\n    mvp = cc_matViewProj * cc_matWorld;\n  #else\n    mvp = cc_matViewProj;\n  #endif\n\n  v_uv0 = a_uv0;\n\n  v_light = a_color;\n  #if USE_TINT\n    v_dark = a_color0;\n  #endif\n\n  gl_Position = mvp * vec4(a_position, 1);\n}\n\n",
          "frag": "\nprecision highp float;\n\nuniform sampler2D texture;\nvarying vec2 v_uv0;\n\nvarying vec4 v_light;\n#if USE_TINT\n  varying vec4 v_dark;\n#endif\n\n#if USE_ALPHA_TEST\n  \n  uniform float alphaThreshold;\n#endif\n\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\n\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\n\nvoid main () {\n  vec4 texColor = texture2D(texture, v_uv0);\n  #if CC_USE_ALPHA_ATLAS_TEXTURE\n      texColor.a *= texture2D(texture, v_uv0 + vec2(0, 0.5)).r;\n  #endif\n  vec4 finalColor;\n\n  #if USE_TINT\n    finalColor.a = v_light.a * texColor.a;\n    finalColor.rgb = ((texColor.a - 1.0) * v_dark.a + 1.0 - texColor.rgb) * v_dark.rgb + texColor.rgb * v_light.rgb;\n  #else\n    finalColor = texColor * v_light;\n  #endif\n\n  ALPHA_TEST(finalColor);\n\n  gl_FragColor = finalColor;\n}\n\n"
        },
        "builtins": {
          "globals": {
            "blocks": [
              {
                "name": "CCGlobal",
                "defines": []
              }
            ],
            "samplers": []
          },
          "locals": {
            "blocks": [
              {
                "name": "CCLocal",
                "defines": []
              }
            ],
            "samplers": []
          }
        },
        "defines": [
          {
            "name": "USE_TINT",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_MODEL",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "USE_ALPHA_TEST",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_ALPHA_ATLAS_TEXTURE",
            "type": "boolean",
            "defines": []
          }
        ],
        "blocks": [
          {
            "name": "ALPHA_TEST",
            "members": [
              {
                "name": "alphaThreshold",
                "type": 13,
                "count": 1
              }
            ],
            "defines": [
              "USE_ALPHA_TEST"
            ],
            "binding": 0
          }
        ],
        "samplers": [
          {
            "name": "texture",
            "type": 29,
            "count": 1,
            "defines": [],
            "binding": 30
          }
        ],
        "dependencies": {},
        "name": "builtin-2d-spine|vs|fs"
      }
    ]
  },
  {
    "__type__": "cc.EffectAsset",
    "_name": "builtin-2d-gray-sprite",
    "techniques": [
      {
        "passes": [
          {
            "blendState": {
              "targets": [
                {
                  "blend": true
                }
              ]
            },
            "rasterizerState": {
              "cullMode": 0
            },
            "program": "builtin-2d-gray-sprite|vs|fs",
            "properties": {
              "texture": {
                "value": "white",
                "type": 29
              }
            }
          }
        ]
      }
    ],
    "shaders": [
      {
        "hash": 422187938,
        "glsl3": {
          "vert": "\nprecision highp float;\nuniform CCGlobal {\n  vec4 cc_time;\n\n  vec4 cc_screenSize;\n\n  vec4 cc_screenScale;\n\n  vec4 cc_nativeSize;\n\n  mat4 cc_matView;\n  mat4 cc_matViewInv;\n  mat4 cc_matProj;\n  mat4 cc_matProjInv;\n  mat4 cc_matViewProj;\n  mat4 cc_matViewProjInv;\n  vec4 cc_cameraPos;\n\n  vec4 cc_exposure;\n\n  vec4 cc_mainLitDir;\n\n  vec4 cc_mainLitColor;\n\n  vec4 cc_ambientSky;\n  vec4 cc_ambientGround;\n};\n\nin vec3 a_position;\n\nin mediump vec2 a_uv0;\nout mediump vec2 v_uv0;\n\nin vec4 a_color;\nout vec4 v_color;\n\nvoid main () {\n  gl_Position = cc_matViewProj * vec4(a_position, 1);\n  v_uv0 = a_uv0;\n  v_color = a_color;\n}\n\n",
          "frag": "\nprecision highp float;\n\nuniform sampler2D texture;\nin mediump vec2 v_uv0;\nin vec4 v_color;\n\nvoid main () {\n  vec4 color = v_color * texture2D(texture, v_uv0);\n  #if CC_USE_ALPHA_ATLAS_TEXTURE\n      color.a *= texture2D(texture, v_uv0 + vec2(0, 0.5)).r;\n  #endif\n  float gray = 0.2126*color.r + 0.7152*color.g + 0.0722*color.b;\n  gl_FragColor = vec4(gray, gray, gray, color.a);\n}\n\n"
        },
        "glsl1": {
          "vert": "\nprecision highp float;\nuniform mat4 cc_matViewProj;\n\nattribute vec3 a_position;\n\nattribute mediump vec2 a_uv0;\nvarying mediump vec2 v_uv0;\n\nattribute vec4 a_color;\nvarying vec4 v_color;\n\nvoid main () {\n  gl_Position = cc_matViewProj * vec4(a_position, 1);\n  v_uv0 = a_uv0;\n  v_color = a_color;\n}\n\n",
          "frag": "\nprecision highp float;\n\nuniform sampler2D texture;\nvarying mediump vec2 v_uv0;\nvarying vec4 v_color;\n\nvoid main () {\n  vec4 color = v_color * texture2D(texture, v_uv0);\n  #if CC_USE_ALPHA_ATLAS_TEXTURE\n      color.a *= texture2D(texture, v_uv0 + vec2(0, 0.5)).r;\n  #endif\n  float gray = 0.2126*color.r + 0.7152*color.g + 0.0722*color.b;\n  gl_FragColor = vec4(gray, gray, gray, color.a);\n}\n\n"
        },
        "builtins": {
          "globals": {
            "blocks": [
              {
                "name": "CCGlobal",
                "defines": []
              }
            ],
            "samplers": []
          },
          "locals": {
            "blocks": [],
            "samplers": []
          }
        },
        "defines": [
          {
            "name": "CC_USE_ALPHA_ATLAS_TEXTURE",
            "type": "boolean",
            "defines": []
          }
        ],
        "blocks": [],
        "samplers": [
          {
            "name": "texture",
            "type": 29,
            "count": 1,
            "defines": [],
            "binding": 30
          }
        ],
        "dependencies": {},
        "name": "builtin-2d-gray-sprite|vs|fs"
      }
    ]
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "item",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "item",
      "_children": [
        {
          "__id__": 2
        },
        {
          "__id__": 4
        }
      ],
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 1
          },
          "_materials": [
            {
              "__uuid__": "ecpdLyjvZBwrvm+cedCcQy"
            }
          ],
          "_spriteFrame": {
            "__uuid__": "f5t0dOA5FJu57u8tnAhkk6"
          },
          "_type": 1,
          "_sizeMode": 0
        },
        {
          "__type__": "cc.Layout",
          "node": {
            "__id__": 1
          },
          "_layoutSize": {
            "__type__": "cc.Size",
            "width": 420,
            "height": 85
          },
          "_N$layoutType": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "21to5mBCxGHJ0DpntfnNvA"
        },
        "fileId": "f1nEvvXWFI67xYxpOJd5A2"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 420,
        "height": 85
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          0,
          -42.5,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "rank_sp",
      "_parent": {
        "__id__": 1
      },
      "_children": [
        {
          "__id__": 3
        }
      ],
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 2
          },
          "_materials": [
            {
              "__uuid__": "ecpdLyjvZBwrvm+cedCcQy"
            }
          ],
          "_spriteFrame": {
            "__uuid__": "f9Zvfdp69D7b3kBJTvYvCh"
          },
          "_sizeMode": 0
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "21to5mBCxGHJ0DpntfnNvA"
        },
        "fileId": "e2VlQUTblD+6MRiTLG+Ax7"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 100,
        "height": 87
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          -160,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "level",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 3
          },
          "_materials": [
            {
              "__uuid__": "ecpdLyjvZBwrvm+cedCcQy"
            }
          ],
          "_useOriginalSize": false,
          "_string": "1",
          "_N$string": "1",
          "_fontSize": 60,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "21to5mBCxGHJ0DpntfnNvA"
        },
        "fileId": "aciHmFGQNPZ5Cht/DqNEtz"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 33.37,
        "height": 50.4
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "right",
      "_parent": {
        "__id__": 1
      },
      "_children": [
        {
          "__id__": 5
        },
        {
          "__id__": 8
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "21to5mBCxGHJ0DpntfnNvA"
        },
        "fileId": "cfKlM0mgRBZbEWuuVkJkvF"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 300,
        "height": 85
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          40,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "label",
      "_parent": {
        "__id__": 4
      },
      "_children": [
        {
          "__id__": 6
        },
        {
          "__id__": 7
        }
      ],
      "_components": [
        {
          "__type__": "cc.Widget",
          "node": {
            "__id__": 5
          },
          "_alignFlags": 8
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "21to5mBCxGHJ0DpntfnNvA"
        },
        "fileId": "acQPPdwDFCUL+gsYlrQZec"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 220,
        "height": 50.4
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          -40,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "nickname",
      "_parent": {
        "__id__": 5
      },
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 6
          },
          "_materials": [
            {
              "__uuid__": "ecpdLyjvZBwrvm+cedCcQy"
            }
          ],
          "_string": "Label",
          "_N$string": "Label",
          "_fontSize": 30,
          "_lineHeight": 30,
          "_N$overflow": 1
        },
        {
          "__type__": "cc.Widget",
          "node": {
            "__id__": 6
          },
          "_alignFlags": 8,
          "_left": 10
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "21to5mBCxGHJ0DpntfnNvA"
        },
        "fileId": "70KHplyK1KYIMXkciNtcZA"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 160,
        "height": 37.8
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          -20,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "level",
      "_parent": {
        "__id__": 5
      },
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 7
          },
          "_materials": [
            {
              "__uuid__": "ecpdLyjvZBwrvm+cedCcQy"
            }
          ],
          "_useOriginalSize": false,
          "_string": "1关",
          "_N$string": "1关",
          "_fontSize": 25,
          "_lineHeight": 25,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        },
        {
          "__type__": "cc.Widget",
          "node": {
            "__id__": 7
          },
          "_alignFlags": 32,
          "_right": 10
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "21to5mBCxGHJ0DpntfnNvA"
        },
        "fileId": "29NOIGueRKj7hJmryjabzP"
      },
      "_color": {
        "__type__": "cc.Color",
        "g": 219,
        "b": 167
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 38.9,
        "height": 31.5
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          80.55000305175781,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "header",
      "_parent": {
        "__id__": 4
      },
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 8
          },
          "_materials": [
            {
              "__uuid__": "ecpdLyjvZBwrvm+cedCcQy"
            }
          ],
          "_spriteFrame": {
            "__uuid__": "b8H2E2GO1KcbCQVu3LjtG5"
          },
          "_sizeMode": 0
        },
        {
          "__type__": "cc.Widget",
          "node": {
            "__id__": 8
          },
          "_alignFlags": 32,
          "_right": 5
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "21to5mBCxGHJ0DpntfnNvA"
        },
        "fileId": "8babK9Q7FFZKhZNeqOiMS+"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 65,
        "height": 65
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          112.5,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    }
  ],
  {
    "__type__": "cc.EffectAsset",
    "_name": "builtin-2d-sprite",
    "techniques": [
      {
        "passes": [
          {
            "blendState": {
              "targets": [
                {
                  "blend": true
                }
              ]
            },
            "rasterizerState": {
              "cullMode": 0
            },
            "program": "builtin-2d-sprite|vs|fs",
            "properties": {
              "texture": {
                "value": "white",
                "type": 29
              },
              "alphaThreshold": {
                "value": [
                  0.5
                ],
                "type": 13
              }
            }
          }
        ]
      }
    ],
    "shaders": [
      {
        "hash": 4253554819,
        "glsl3": {
          "vert": "\nprecision highp float;\nuniform CCGlobal {\n  vec4 cc_time;\n\n  vec4 cc_screenSize;\n\n  vec4 cc_screenScale;\n\n  vec4 cc_nativeSize;\n\n  mat4 cc_matView;\n  mat4 cc_matViewInv;\n  mat4 cc_matProj;\n  mat4 cc_matProjInv;\n  mat4 cc_matViewProj;\n  mat4 cc_matViewProjInv;\n  vec4 cc_cameraPos;\n\n  vec4 cc_exposure;\n\n  vec4 cc_mainLitDir;\n\n  vec4 cc_mainLitColor;\n\n  vec4 cc_ambientSky;\n  vec4 cc_ambientGround;\n};\nuniform CCLocal {\n  mat4 cc_matWorld;\n  mat4 cc_matWorldIT;\n};\n\nin vec3 a_position;\nin vec4 a_color;\nout vec4 v_color;\n\n#if USE_TEXTURE\nin vec2 a_uv0;\nout vec2 v_uv0;\n#endif\n\nvoid main () {\n  vec4 pos = vec4(a_position, 1);\n\n  #if CC_USE_MODEL\n  pos = cc_matViewProj * cc_matWorld * pos;\n  #else\n  pos = cc_matViewProj * pos;\n  #endif\n\n  #if USE_TEXTURE\n  v_uv0 = a_uv0;\n  #endif\n\n  v_color = a_color;\n\n  gl_Position = pos;\n}\n",
          "frag": "\nprecision highp float;\n\n#if USE_ALPHA_TEST\n  \n  uniform ALPHA_TEST {\n    float alphaThreshold;\n  }\n#endif\n\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\n\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\n\nin vec4 v_color;\n\n#if USE_TEXTURE\nin vec2 v_uv0;\nuniform sampler2D texture;\n#endif\n\nvoid main () {\n  vec4 o = vec4(1, 1, 1, 1);\n\n  #if USE_TEXTURE\n  o *= texture(texture, v_uv0);\n    #if CC_USE_ALPHA_ATLAS_TEXTURE\n    o.a *= texture2D(texture, v_uv0 + vec2(0, 0.5)).r;\n    #endif\n  #endif\n\n  o *= v_color;\n\n  ALPHA_TEST(o);\n\n  gl_FragColor = o;\n}\n"
        },
        "glsl1": {
          "vert": "\nprecision highp float;\nuniform mat4 cc_matViewProj;\nuniform mat4 cc_matWorld;\n\nattribute vec3 a_position;\nattribute vec4 a_color;\nvarying vec4 v_color;\n\n#if USE_TEXTURE\nattribute vec2 a_uv0;\nvarying vec2 v_uv0;\n#endif\n\nvoid main () {\n  vec4 pos = vec4(a_position, 1);\n\n  #if CC_USE_MODEL\n  pos = cc_matViewProj * cc_matWorld * pos;\n  #else\n  pos = cc_matViewProj * pos;\n  #endif\n\n  #if USE_TEXTURE\n  v_uv0 = a_uv0;\n  #endif\n\n  v_color = a_color;\n\n  gl_Position = pos;\n}\n",
          "frag": "\nprecision highp float;\n\n#if USE_ALPHA_TEST\n  \n  uniform float alphaThreshold;\n#endif\n\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\n\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\n\nvarying vec4 v_color;\n\n#if USE_TEXTURE\nvarying vec2 v_uv0;\nuniform sampler2D texture;\n#endif\n\nvoid main () {\n  vec4 o = vec4(1, 1, 1, 1);\n\n  #if USE_TEXTURE\n  o *= texture2D(texture, v_uv0);\n    #if CC_USE_ALPHA_ATLAS_TEXTURE\n    o.a *= texture2D(texture, v_uv0 + vec2(0, 0.5)).r;\n    #endif\n  #endif\n\n  o *= v_color;\n\n  ALPHA_TEST(o);\n\n  gl_FragColor = o;\n}\n"
        },
        "builtins": {
          "globals": {
            "blocks": [
              {
                "name": "CCGlobal",
                "defines": []
              }
            ],
            "samplers": []
          },
          "locals": {
            "blocks": [
              {
                "name": "CCLocal",
                "defines": []
              }
            ],
            "samplers": []
          }
        },
        "defines": [
          {
            "name": "USE_TEXTURE",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_MODEL",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "USE_ALPHA_TEST",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_ALPHA_ATLAS_TEXTURE",
            "type": "boolean",
            "defines": [
              "USE_TEXTURE"
            ]
          }
        ],
        "blocks": [
          {
            "name": "ALPHA_TEST",
            "members": [
              {
                "name": "alphaThreshold",
                "type": 13,
                "count": 1
              }
            ],
            "defines": [
              "USE_ALPHA_TEST"
            ],
            "binding": 0
          }
        ],
        "samplers": [
          {
            "name": "texture",
            "type": 29,
            "count": 1,
            "defines": [
              "USE_TEXTURE"
            ],
            "binding": 30
          }
        ],
        "dependencies": {},
        "name": "builtin-2d-sprite|vs|fs"
      }
    ]
  },
  {
    "__type__": "cc.Material",
    "_name": "builtin-unlit",
    "_effectAsset": {
      "__uuid__": "6dkeWRTOBGXICfYQ7JUBnG"
    },
    "_defines": {
      "USE_DIFFUSE_TEXTURE": true
    },
    "_props": {
      "diffuseTexture": {
        "__uuid__": "02delMVqdBD70a/HSD99FK"
      }
    }
  },
  {
    "__type__": "cc.Material",
    "_name": "builtin-2d-gray-sprite",
    "_effectAsset": {
      "__uuid__": "14TDKXr2NJ6LjvHPops74o"
    },
    "_defines": {},
    "_props": {}
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "num_yellow",
      "texture": "a9FefMQfVHRaXGCiiaPzJ7",
      "rect": [
        4,
        1,
        122,
        110
      ],
      "offset": [
        2,
        1
      ],
      "originalSize": [
        126,
        114
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "num_gre",
      "texture": "feFAOrrB1OiIHYi+LtFMHc",
      "rect": [
        4,
        1,
        122,
        110
      ],
      "offset": [
        2,
        1
      ],
      "originalSize": [
        126,
        114
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.EffectAsset",
    "_name": "builtin-unlit",
    "techniques": [
      {
        "passes": [
          {
            "blendState": {
              "targets": [
                {
                  "blend": true
                }
              ]
            },
            "rasterizerState": {
              "cullMode": 0
            },
            "program": "builtin-unlit|unlit-vs|unlit-fs",
            "depthStencilState": {
              "depthTest": true,
              "depthWrite": true
            },
            "properties": {
              "diffuseTexture": {
                "value": "white",
                "type": 29
              },
              "diffuseColor": {
                "value": [
                  1,
                  1,
                  1,
                  1
                ],
                "inspector": {
                  "type": "color"
                },
                "type": 16
              },
              "alphaThreshold": {
                "value": [
                  0.5
                ],
                "type": 13
              },
              "mainTiling": {
                "value": [
                  1,
                  1
                ],
                "type": 14
              },
              "mainOffset": {
                "value": [
                  0,
                  0
                ],
                "type": 14
              }
            }
          }
        ]
      }
    ],
    "shaders": [
      {
        "hash": 408530468,
        "glsl3": {
          "vert": "\nprecision highp float;\nuniform CCLocal {\n  mat4 cc_matWorld;\n  mat4 cc_matWorldIT;\n};\nuniform CCGlobal {\n  vec4 cc_time;\n\n  vec4 cc_screenSize;\n\n  vec4 cc_screenScale;\n\n  vec4 cc_nativeSize;\n\n  mat4 cc_matView;\n  mat4 cc_matViewInv;\n  mat4 cc_matProj;\n  mat4 cc_matProjInv;\n  mat4 cc_matViewProj;\n  mat4 cc_matViewProjInv;\n  vec4 cc_cameraPos;\n\n  vec4 cc_exposure;\n\n  vec4 cc_mainLitDir;\n\n  vec4 cc_mainLitColor;\n\n  vec4 cc_ambientSky;\n  vec4 cc_ambientGround;\n};\n\n#if CC_USE_SKINNING\n\n  in vec4 a_weights;\n  in vec4 a_joints;\n\n  #if CC_USE_JOINTS_TEXTRUE\n    uniform SKINNING {\n      vec2 cc_jointsTextureSize;\n    }\n    uniform sampler2D cc_jointsTexture;\n\n    #if CC_JOINTS_TEXTURE_FLOAT32\n      mat4 getBoneMatrix(const in float i) {\n        float width = cc_jointsTextureSize.x;\n        float height = cc_jointsTextureSize.y;\n        float j = i * 4.0;\n        float x = mod(j, width);\n        float y = floor(j / width);\n\n        float dx = 1.0 / width;\n        float dy = 1.0 / height;\n\n        y = dy * (y + 0.5);\n\n        vec4 v1 = texture2D(cc_jointsTexture, vec2(dx * (x + 0.5), y));\n        vec4 v2 = texture2D(cc_jointsTexture, vec2(dx * (x + 1.5), y));\n        vec4 v3 = texture2D(cc_jointsTexture, vec2(dx * (x + 2.5), y));\n        vec4 v4 = texture2D(cc_jointsTexture, vec2(dx * (x + 3.5), y));\n\n        return mat4(v1, v2, v3, v4);\n      }\n    #else\n      float decode32(vec4 rgba) {\n        float Sign = 1.0 - step(128.0, rgba[0]) * 2.0;\n        float Exponent = 2.0 * mod(rgba[0], 128.0) + step(128.0, rgba[1]) - 127.0;\n        float Mantissa = mod(rgba[1], 128.0) * 65536.0 + rgba[2] * 256.0 + rgba[3] + 8388608.0;\n        return Sign * exp2(Exponent - 23.0) * Mantissa;\n      }\n      vec4 decodevec4 (vec4 x, vec4 y, vec4 z, vec4 w) {\n\n        return vec4(\n          decode32(x.wzyx * 255.0),\n          decode32(y.wzyx * 255.0),\n          decode32(z.wzyx * 255.0),\n          decode32(w.wzyx * 255.0)\n        );\n      }\n\n      vec4 decodevec4 (float dx, float x, float y) {\n        return decodevec4(\n          texture2D(cc_jointsTexture, vec2(dx * (x + 0.5), y)),\n          texture2D(cc_jointsTexture, vec2(dx * (x + 1.5), y)),\n          texture2D(cc_jointsTexture, vec2(dx * (x + 2.5), y)),\n          texture2D(cc_jointsTexture, vec2(dx * (x + 3.5), y))\n        );\n      }\n\n      mat4 getBoneMatrix(const in float i) {\n        float width = cc_jointsTextureSize.x;\n        float height = cc_jointsTextureSize.y;\n        float j = i * 16.0;\n        float x = mod(j, width);\n        float y = floor(j / width);\n\n        float dx = 1.0 / width;\n        float dy = 1.0 / height;\n\n        y = dy * (y + 0.5);\n\n        vec4 v1 = decodevec4(dx, x,       y);\n        vec4 v2 = decodevec4(dx, x+4.0,   y);\n        vec4 v3 = decodevec4(dx, x+8.0,   y);\n        vec4 v4 = decodevec4(dx, x+12.0,  y);\n\n        return mat4(v1, v2, v3, v4);\n      }\n    #endif\n  #else\n    uniform CC_JOINT_MATRIX {\n      mat4 cc_jointMatrices[50];\n    }\n\n    mat4 getBoneMatrix(const in float i) {\n      return cc_jointMatrices[int(i)];\n    }\n  #endif\n\n    mat4 skinMatrix() {\n      return\n        getBoneMatrix(a_joints.x) * a_weights.x +\n        getBoneMatrix(a_joints.y) * a_weights.y +\n        getBoneMatrix(a_joints.z) * a_weights.z +\n        getBoneMatrix(a_joints.w) * a_weights.w\n        ;\n    }\n#endif\n\nvoid SKIN_VERTEX(inout vec4 a1) {\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    a1 = m * a1;\n  #endif\n}\n\nvoid SKIN_VERTEX(inout vec4 a1, inout vec4 a2) {\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    a1 = m * a1;\n    a2 = m * a2;\n  #endif\n}\n\nvoid SKIN_VERTEX(inout vec4 a1, inout vec4 a2, inout vec4 a3) {\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    a1 = m * a1;\n    a2 = m * a2;\n    a3 = m * a3;\n  #endif\n}\n\nuniform MAIN_TILING {\n  vec2 mainTiling;\n  vec2 mainOffset;\n}\n\nin vec3 a_position;\n\n#if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n  in mediump vec2 a_uv0;\n  out mediump vec2 v_uv0;\n#endif\n\n#if CC_USE_ATTRIBUTE_COLOR\n  in lowp vec4 a_color;\n  out lowp vec4 v_color;\n#endif\n\nvoid main () {\n  vec4 position = vec4(a_position, 1);\n\n  SKIN_VERTEX(position);\n  \n  #if CC_USE_ATTRIBUTE_COLOR\n      v_color = a_color;\n  #endif\n\n  #if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n      v_uv0 = a_uv0 * mainTiling + mainOffset;\n  #endif\n\n  gl_Position = cc_matViewProj * cc_matWorld * position;\n}\n",
          "frag": "\nprecision highp float;\n\nvec3 gammaToLinearSpaceRGB(in vec3 sRGB) {\n\n  return sRGB * (sRGB * (sRGB * 0.305306011 + 0.682171111) + 0.012522878);\n}\n\nvec3 linearToGammaSpaceRGB(in vec3 RGB) {\n\n  vec3 S1 = sqrt(RGB);\n  vec3 S2 = sqrt(S1);\n  vec3 S3 = sqrt(S2);\n  return 0.585122381 * S1 + 0.783140355 * S2 - 0.368262736 * S3;\n}\n\nvec4 gammaToLinearSpaceRGBA(in vec4 sRGBA) {\n  return vec4(gammaToLinearSpaceRGB(sRGBA.rgb), sRGBA.a);\n}\n\nvec4 linearToGammaSpaceRGBA(in vec4 RGBA) {\n  return vec4(linearToGammaSpaceRGB(RGBA.rgb), RGBA.a);\n}\n\nvec4 linearToLinear (in vec4 value) {\n  return value;\n}\n\n#if USE_ALPHA_TEST\n  \n  uniform ALPHA_TEST {\n    float alphaThreshold;\n  }\n#endif\n\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\n\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\n\nuniform DIFFUSE {\n  lowp vec4 diffuseColor;\n};\n\n#if USE_DIFFUSE_TEXTURE\n  uniform sampler2D diffuseTexture;\n#endif\n\nvoid MULTIPLY_DIFFUSE_TEXTRUE_COLOR (inout vec4 color, in vec2 uv) {\n  #if USE_DIFFUSE_TEXTURE && CC_USE_ATTRIBUTE_UV0\n    vec4 diffuseTextureColor = texture2D(diffuseTexture, uv);\n    #if CC_USE_ALPHA_ATLAS_DIFFUSETEXTURE\n      diffuseTextureColor.a *= texture2D(diffuseTexture, uv + vec2(0, 0.5)).r;\n    #endif\n    color *= linearToLinear(diffuseTextureColor);\n  #endif\n}\n\nvoid CALC_DIFFUSE (inout vec4 color, in vec2 uv) {\n  color *= diffuseColor;\n  MULTIPLY_DIFFUSE_TEXTRUE_COLOR(color, uv);\n}\n\nvoid CALC_DIFFUSE (inout vec4 color) {\n  color *= diffuseColor;\n}\n\n#if CC_USE_ATTRIBUTE_COLOR\n  in lowp vec4 v_color;\n#endif\n\n#if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n  in mediump vec2 v_uv0;\n#endif\n\nvoid main () {\n  vec4 color = vec4(1, 1, 1, 1);\n\n  #if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n    CALC_DIFFUSE(color, v_uv0);\n  #else \n    CALC_DIFFUSE(color);\n  #endif\n\n  #if CC_USE_ATTRIBUTE_COLOR\n    color *= v_color;\n  #endif\n\n  ALPHA_TEST(color);\n\n  gl_FragColor = linearToLinear( color );\n}\n"
        },
        "glsl1": {
          "vert": "\nprecision highp float;\nuniform mat4 cc_matWorld;\nuniform mat4 cc_matViewProj;\n\n#if CC_USE_SKINNING\n\n  attribute vec4 a_weights;\n  attribute vec4 a_joints;\n\n  #if CC_USE_JOINTS_TEXTRUE\n    uniform vec2 cc_jointsTextureSize;\n    uniform sampler2D cc_jointsTexture;\n\n    #if CC_JOINTS_TEXTURE_FLOAT32\n      mat4 getBoneMatrix(const in float i) {\n        float width = cc_jointsTextureSize.x;\n        float height = cc_jointsTextureSize.y;\n        float j = i * 4.0;\n        float x = mod(j, width);\n        float y = floor(j / width);\n\n        float dx = 1.0 / width;\n        float dy = 1.0 / height;\n\n        y = dy * (y + 0.5);\n\n        vec4 v1 = texture2D(cc_jointsTexture, vec2(dx * (x + 0.5), y));\n        vec4 v2 = texture2D(cc_jointsTexture, vec2(dx * (x + 1.5), y));\n        vec4 v3 = texture2D(cc_jointsTexture, vec2(dx * (x + 2.5), y));\n        vec4 v4 = texture2D(cc_jointsTexture, vec2(dx * (x + 3.5), y));\n\n        return mat4(v1, v2, v3, v4);\n      }\n    #else\n      float decode32(vec4 rgba) {\n        float Sign = 1.0 - step(128.0, rgba[0]) * 2.0;\n        float Exponent = 2.0 * mod(rgba[0], 128.0) + step(128.0, rgba[1]) - 127.0;\n        float Mantissa = mod(rgba[1], 128.0) * 65536.0 + rgba[2] * 256.0 + rgba[3] + 8388608.0;\n        return Sign * exp2(Exponent - 23.0) * Mantissa;\n      }\n      vec4 decodevec4 (vec4 x, vec4 y, vec4 z, vec4 w) {\n\n        return vec4(\n          decode32(x.wzyx * 255.0),\n          decode32(y.wzyx * 255.0),\n          decode32(z.wzyx * 255.0),\n          decode32(w.wzyx * 255.0)\n        );\n      }\n\n      vec4 decodevec4 (float dx, float x, float y) {\n        return decodevec4(\n          texture2D(cc_jointsTexture, vec2(dx * (x + 0.5), y)),\n          texture2D(cc_jointsTexture, vec2(dx * (x + 1.5), y)),\n          texture2D(cc_jointsTexture, vec2(dx * (x + 2.5), y)),\n          texture2D(cc_jointsTexture, vec2(dx * (x + 3.5), y))\n        );\n      }\n\n      mat4 getBoneMatrix(const in float i) {\n        float width = cc_jointsTextureSize.x;\n        float height = cc_jointsTextureSize.y;\n        float j = i * 16.0;\n        float x = mod(j, width);\n        float y = floor(j / width);\n\n        float dx = 1.0 / width;\n        float dy = 1.0 / height;\n\n        y = dy * (y + 0.5);\n\n        vec4 v1 = decodevec4(dx, x,       y);\n        vec4 v2 = decodevec4(dx, x+4.0,   y);\n        vec4 v3 = decodevec4(dx, x+8.0,   y);\n        vec4 v4 = decodevec4(dx, x+12.0,  y);\n\n        return mat4(v1, v2, v3, v4);\n      }\n    #endif\n  #else\n    uniform mat4 cc_jointMatrices[50];\nmat4 getBoneMatrix(const in float i) {\n      return cc_jointMatrices[int(i)];\n    }\n  #endif\n\n    mat4 skinMatrix() {\n      return\n        getBoneMatrix(a_joints.x) * a_weights.x +\n        getBoneMatrix(a_joints.y) * a_weights.y +\n        getBoneMatrix(a_joints.z) * a_weights.z +\n        getBoneMatrix(a_joints.w) * a_weights.w\n        ;\n    }\n#endif\n\nvoid SKIN_VERTEX(inout vec4 a1) {\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    a1 = m * a1;\n  #endif\n}\n\nvoid SKIN_VERTEX(inout vec4 a1, inout vec4 a2) {\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    a1 = m * a1;\n    a2 = m * a2;\n  #endif\n}\n\nvoid SKIN_VERTEX(inout vec4 a1, inout vec4 a2, inout vec4 a3) {\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    a1 = m * a1;\n    a2 = m * a2;\n    a3 = m * a3;\n  #endif\n}\n\nuniform vec2 mainTiling;\nuniform vec2 mainOffset;\nattribute vec3 a_position;\n\n#if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n  attribute mediump vec2 a_uv0;\n  varying mediump vec2 v_uv0;\n#endif\n\n#if CC_USE_ATTRIBUTE_COLOR\n  attribute lowp vec4 a_color;\n  varying lowp vec4 v_color;\n#endif\n\nvoid main () {\n  vec4 position = vec4(a_position, 1);\n\n  SKIN_VERTEX(position);\n  \n  #if CC_USE_ATTRIBUTE_COLOR\n      v_color = a_color;\n  #endif\n\n  #if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n      v_uv0 = a_uv0 * mainTiling + mainOffset;\n  #endif\n\n  gl_Position = cc_matViewProj * cc_matWorld * position;\n}\n",
          "frag": "\nprecision highp float;\n\nvec3 gammaToLinearSpaceRGB(in vec3 sRGB) {\n\n  return sRGB * (sRGB * (sRGB * 0.305306011 + 0.682171111) + 0.012522878);\n}\n\nvec3 linearToGammaSpaceRGB(in vec3 RGB) {\n\n  vec3 S1 = sqrt(RGB);\n  vec3 S2 = sqrt(S1);\n  vec3 S3 = sqrt(S2);\n  return 0.585122381 * S1 + 0.783140355 * S2 - 0.368262736 * S3;\n}\n\nvec4 gammaToLinearSpaceRGBA(in vec4 sRGBA) {\n  return vec4(gammaToLinearSpaceRGB(sRGBA.rgb), sRGBA.a);\n}\n\nvec4 linearToGammaSpaceRGBA(in vec4 RGBA) {\n  return vec4(linearToGammaSpaceRGB(RGBA.rgb), RGBA.a);\n}\n\nvec4 linearToLinear (in vec4 value) {\n  return value;\n}\n\n#if USE_ALPHA_TEST\n  \n  uniform float alphaThreshold;\n#endif\n\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\n\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\n\nuniform lowp vec4 diffuseColor;\n\n#if USE_DIFFUSE_TEXTURE\n  uniform sampler2D diffuseTexture;\n#endif\n\nvoid MULTIPLY_DIFFUSE_TEXTRUE_COLOR (inout vec4 color, in vec2 uv) {\n  #if USE_DIFFUSE_TEXTURE && CC_USE_ATTRIBUTE_UV0\n    vec4 diffuseTextureColor = texture2D(diffuseTexture, uv);\n    #if CC_USE_ALPHA_ATLAS_DIFFUSETEXTURE\n      diffuseTextureColor.a *= texture2D(diffuseTexture, uv + vec2(0, 0.5)).r;\n    #endif\n    color *= linearToLinear(diffuseTextureColor);\n  #endif\n}\n\nvoid CALC_DIFFUSE (inout vec4 color, in vec2 uv) {\n  color *= diffuseColor;\n  MULTIPLY_DIFFUSE_TEXTRUE_COLOR(color, uv);\n}\n\nvoid CALC_DIFFUSE (inout vec4 color) {\n  color *= diffuseColor;\n}\n\n#if CC_USE_ATTRIBUTE_COLOR\n  varying lowp vec4 v_color;\n#endif\n\n#if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n  varying mediump vec2 v_uv0;\n#endif\n\nvoid main () {\n  vec4 color = vec4(1, 1, 1, 1);\n\n  #if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n    CALC_DIFFUSE(color, v_uv0);\n  #else \n    CALC_DIFFUSE(color);\n  #endif\n\n  #if CC_USE_ATTRIBUTE_COLOR\n    color *= v_color;\n  #endif\n\n  ALPHA_TEST(color);\n\n  gl_FragColor = linearToLinear( color );\n}\n"
        },
        "builtins": {
          "globals": {
            "blocks": [
              {
                "name": "CCGlobal",
                "defines": []
              }
            ],
            "samplers": []
          },
          "locals": {
            "blocks": [
              {
                "name": "CCLocal",
                "defines": []
              },
              {
                "name": "CC_JOINT_MATRIX",
                "defines": [
                  "CC_USE_SKINNING"
                ]
              }
            ],
            "samplers": [
              {
                "name": "cc_jointsTexture",
                "defines": [
                  "CC_USE_SKINNING",
                  "CC_USE_JOINTS_TEXTRUE"
                ]
              }
            ]
          }
        },
        "defines": [
          {
            "name": "CC_USE_SKINNING",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_JOINTS_TEXTRUE",
            "type": "boolean",
            "defines": [
              "CC_USE_SKINNING"
            ]
          },
          {
            "name": "CC_JOINTS_TEXTURE_FLOAT32",
            "type": "boolean",
            "defines": [
              "CC_USE_SKINNING",
              "CC_USE_JOINTS_TEXTRUE"
            ]
          },
          {
            "name": "CC_USE_ATTRIBUTE_UV0",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "USE_DIFFUSE_TEXTURE",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_ATTRIBUTE_COLOR",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "USE_ALPHA_TEST",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_ALPHA_ATLAS_DIFFUSETEXTURE",
            "type": "boolean",
            "defines": [
              "USE_DIFFUSE_TEXTURE",
              "CC_USE_ATTRIBUTE_UV0"
            ]
          }
        ],
        "blocks": [
          {
            "name": "SKINNING",
            "members": [
              {
                "name": "cc_jointsTextureSize",
                "type": 14,
                "count": 1
              }
            ],
            "defines": [
              "CC_USE_SKINNING",
              "CC_USE_JOINTS_TEXTRUE"
            ],
            "binding": 0
          },
          {
            "name": "MAIN_TILING",
            "members": [
              {
                "name": "mainTiling",
                "type": 14,
                "count": 1
              },
              {
                "name": "mainOffset",
                "type": 14,
                "count": 1
              }
            ],
            "defines": [],
            "binding": 1
          },
          {
            "name": "ALPHA_TEST",
            "members": [
              {
                "name": "alphaThreshold",
                "type": 13,
                "count": 1
              }
            ],
            "defines": [
              "USE_ALPHA_TEST"
            ],
            "binding": 2
          },
          {
            "name": "DIFFUSE",
            "members": [
              {
                "name": "diffuseColor",
                "type": 16,
                "count": 1
              }
            ],
            "defines": [],
            "binding": 3
          }
        ],
        "samplers": [
          {
            "name": "diffuseTexture",
            "type": 29,
            "count": 1,
            "defines": [
              "USE_DIFFUSE_TEXTURE"
            ],
            "binding": 30
          }
        ],
        "dependencies": {},
        "name": "builtin-unlit|unlit-vs|unlit-fs"
      }
    ]
  },
  {
    "__type__": "cc.Material",
    "_name": "builtin-2d-base",
    "_effectAsset": {
      "__uuid__": "28dPjdQWxEQIG3VVl1Qm6T"
    },
    "_defines": {},
    "_props": {}
  },
  {
    "__type__": "cc.EffectAsset",
    "_name": "builtin-unlit-transparent",
    "techniques": [
      {
        "stages": [
          "transparent"
        ],
        "passes": [
          {
            "blendState": {
              "targets": [
                {
                  "blend": true
                }
              ]
            },
            "rasterizerState": {
              "cullMode": 0
            },
            "program": "builtin-unlit-transparent|unlit-vs|unlit-fs",
            "depthStencilState": {
              "depthTest": true,
              "depthWrite": true
            },
            "properties": {
              "diffuseTexture": {
                "value": "white",
                "type": 29
              },
              "diffuseColor": {
                "value": [
                  1,
                  1,
                  1,
                  1
                ],
                "inspector": {
                  "type": "color"
                },
                "type": 16
              },
              "alphaThreshold": {
                "value": [
                  0.5
                ],
                "type": 13
              },
              "mainTiling": {
                "value": [
                  1,
                  1
                ],
                "type": 14
              },
              "mainOffset": {
                "value": [
                  0,
                  0
                ],
                "type": 14
              }
            }
          }
        ]
      }
    ],
    "shaders": [
      {
        "hash": 408530468,
        "glsl3": {
          "vert": "\nprecision highp float;\nuniform CCLocal {\n  mat4 cc_matWorld;\n  mat4 cc_matWorldIT;\n};\nuniform CCGlobal {\n  vec4 cc_time;\n\n  vec4 cc_screenSize;\n\n  vec4 cc_screenScale;\n\n  vec4 cc_nativeSize;\n\n  mat4 cc_matView;\n  mat4 cc_matViewInv;\n  mat4 cc_matProj;\n  mat4 cc_matProjInv;\n  mat4 cc_matViewProj;\n  mat4 cc_matViewProjInv;\n  vec4 cc_cameraPos;\n\n  vec4 cc_exposure;\n\n  vec4 cc_mainLitDir;\n\n  vec4 cc_mainLitColor;\n\n  vec4 cc_ambientSky;\n  vec4 cc_ambientGround;\n};\n\n#if CC_USE_SKINNING\n\n  in vec4 a_weights;\n  in vec4 a_joints;\n\n  #if CC_USE_JOINTS_TEXTRUE\n    uniform SKINNING {\n      vec2 cc_jointsTextureSize;\n    }\n    uniform sampler2D cc_jointsTexture;\n\n    #if CC_JOINTS_TEXTURE_FLOAT32\n      mat4 getBoneMatrix(const in float i) {\n        float width = cc_jointsTextureSize.x;\n        float height = cc_jointsTextureSize.y;\n        float j = i * 4.0;\n        float x = mod(j, width);\n        float y = floor(j / width);\n\n        float dx = 1.0 / width;\n        float dy = 1.0 / height;\n\n        y = dy * (y + 0.5);\n\n        vec4 v1 = texture2D(cc_jointsTexture, vec2(dx * (x + 0.5), y));\n        vec4 v2 = texture2D(cc_jointsTexture, vec2(dx * (x + 1.5), y));\n        vec4 v3 = texture2D(cc_jointsTexture, vec2(dx * (x + 2.5), y));\n        vec4 v4 = texture2D(cc_jointsTexture, vec2(dx * (x + 3.5), y));\n\n        return mat4(v1, v2, v3, v4);\n      }\n    #else\n      float decode32(vec4 rgba) {\n        float Sign = 1.0 - step(128.0, rgba[0]) * 2.0;\n        float Exponent = 2.0 * mod(rgba[0], 128.0) + step(128.0, rgba[1]) - 127.0;\n        float Mantissa = mod(rgba[1], 128.0) * 65536.0 + rgba[2] * 256.0 + rgba[3] + 8388608.0;\n        return Sign * exp2(Exponent - 23.0) * Mantissa;\n      }\n      vec4 decodevec4 (vec4 x, vec4 y, vec4 z, vec4 w) {\n\n        return vec4(\n          decode32(x.wzyx * 255.0),\n          decode32(y.wzyx * 255.0),\n          decode32(z.wzyx * 255.0),\n          decode32(w.wzyx * 255.0)\n        );\n      }\n\n      vec4 decodevec4 (float dx, float x, float y) {\n        return decodevec4(\n          texture2D(cc_jointsTexture, vec2(dx * (x + 0.5), y)),\n          texture2D(cc_jointsTexture, vec2(dx * (x + 1.5), y)),\n          texture2D(cc_jointsTexture, vec2(dx * (x + 2.5), y)),\n          texture2D(cc_jointsTexture, vec2(dx * (x + 3.5), y))\n        );\n      }\n\n      mat4 getBoneMatrix(const in float i) {\n        float width = cc_jointsTextureSize.x;\n        float height = cc_jointsTextureSize.y;\n        float j = i * 16.0;\n        float x = mod(j, width);\n        float y = floor(j / width);\n\n        float dx = 1.0 / width;\n        float dy = 1.0 / height;\n\n        y = dy * (y + 0.5);\n\n        vec4 v1 = decodevec4(dx, x,       y);\n        vec4 v2 = decodevec4(dx, x+4.0,   y);\n        vec4 v3 = decodevec4(dx, x+8.0,   y);\n        vec4 v4 = decodevec4(dx, x+12.0,  y);\n\n        return mat4(v1, v2, v3, v4);\n      }\n    #endif\n  #else\n    uniform CC_JOINT_MATRIX {\n      mat4 cc_jointMatrices[50];\n    }\n\n    mat4 getBoneMatrix(const in float i) {\n      return cc_jointMatrices[int(i)];\n    }\n  #endif\n\n    mat4 skinMatrix() {\n      return\n        getBoneMatrix(a_joints.x) * a_weights.x +\n        getBoneMatrix(a_joints.y) * a_weights.y +\n        getBoneMatrix(a_joints.z) * a_weights.z +\n        getBoneMatrix(a_joints.w) * a_weights.w\n        ;\n    }\n#endif\n\nvoid SKIN_VERTEX(inout vec4 a1) {\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    a1 = m * a1;\n  #endif\n}\n\nvoid SKIN_VERTEX(inout vec4 a1, inout vec4 a2) {\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    a1 = m * a1;\n    a2 = m * a2;\n  #endif\n}\n\nvoid SKIN_VERTEX(inout vec4 a1, inout vec4 a2, inout vec4 a3) {\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    a1 = m * a1;\n    a2 = m * a2;\n    a3 = m * a3;\n  #endif\n}\n\nuniform MAIN_TILING {\n  vec2 mainTiling;\n  vec2 mainOffset;\n}\n\nin vec3 a_position;\n\n#if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n  in mediump vec2 a_uv0;\n  out mediump vec2 v_uv0;\n#endif\n\n#if CC_USE_ATTRIBUTE_COLOR\n  in lowp vec4 a_color;\n  out lowp vec4 v_color;\n#endif\n\nvoid main () {\n  vec4 position = vec4(a_position, 1);\n\n  SKIN_VERTEX(position);\n  \n  #if CC_USE_ATTRIBUTE_COLOR\n      v_color = a_color;\n  #endif\n\n  #if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n      v_uv0 = a_uv0 * mainTiling + mainOffset;\n  #endif\n\n  gl_Position = cc_matViewProj * cc_matWorld * position;\n}\n",
          "frag": "\nprecision highp float;\n\nvec3 gammaToLinearSpaceRGB(in vec3 sRGB) {\n\n  return sRGB * (sRGB * (sRGB * 0.305306011 + 0.682171111) + 0.012522878);\n}\n\nvec3 linearToGammaSpaceRGB(in vec3 RGB) {\n\n  vec3 S1 = sqrt(RGB);\n  vec3 S2 = sqrt(S1);\n  vec3 S3 = sqrt(S2);\n  return 0.585122381 * S1 + 0.783140355 * S2 - 0.368262736 * S3;\n}\n\nvec4 gammaToLinearSpaceRGBA(in vec4 sRGBA) {\n  return vec4(gammaToLinearSpaceRGB(sRGBA.rgb), sRGBA.a);\n}\n\nvec4 linearToGammaSpaceRGBA(in vec4 RGBA) {\n  return vec4(linearToGammaSpaceRGB(RGBA.rgb), RGBA.a);\n}\n\nvec4 linearToLinear (in vec4 value) {\n  return value;\n}\n\n#if USE_ALPHA_TEST\n  \n  uniform ALPHA_TEST {\n    float alphaThreshold;\n  }\n#endif\n\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\n\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\n\nuniform DIFFUSE {\n  lowp vec4 diffuseColor;\n};\n\n#if USE_DIFFUSE_TEXTURE\n  uniform sampler2D diffuseTexture;\n#endif\n\nvoid MULTIPLY_DIFFUSE_TEXTRUE_COLOR (inout vec4 color, in vec2 uv) {\n  #if USE_DIFFUSE_TEXTURE && CC_USE_ATTRIBUTE_UV0\n    vec4 diffuseTextureColor = texture2D(diffuseTexture, uv);\n    #if CC_USE_ALPHA_ATLAS_DIFFUSETEXTURE\n      diffuseTextureColor.a *= texture2D(diffuseTexture, uv + vec2(0, 0.5)).r;\n    #endif\n    color *= linearToLinear(diffuseTextureColor);\n  #endif\n}\n\nvoid CALC_DIFFUSE (inout vec4 color, in vec2 uv) {\n  color *= diffuseColor;\n  MULTIPLY_DIFFUSE_TEXTRUE_COLOR(color, uv);\n}\n\nvoid CALC_DIFFUSE (inout vec4 color) {\n  color *= diffuseColor;\n}\n\n#if CC_USE_ATTRIBUTE_COLOR\n  in lowp vec4 v_color;\n#endif\n\n#if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n  in mediump vec2 v_uv0;\n#endif\n\nvoid main () {\n  vec4 color = vec4(1, 1, 1, 1);\n\n  #if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n    CALC_DIFFUSE(color, v_uv0);\n  #else \n    CALC_DIFFUSE(color);\n  #endif\n\n  #if CC_USE_ATTRIBUTE_COLOR\n    color *= v_color;\n  #endif\n\n  ALPHA_TEST(color);\n\n  gl_FragColor = linearToLinear( color );\n}\n"
        },
        "glsl1": {
          "vert": "\nprecision highp float;\nuniform mat4 cc_matWorld;\nuniform mat4 cc_matViewProj;\n\n#if CC_USE_SKINNING\n\n  attribute vec4 a_weights;\n  attribute vec4 a_joints;\n\n  #if CC_USE_JOINTS_TEXTRUE\n    uniform vec2 cc_jointsTextureSize;\n    uniform sampler2D cc_jointsTexture;\n\n    #if CC_JOINTS_TEXTURE_FLOAT32\n      mat4 getBoneMatrix(const in float i) {\n        float width = cc_jointsTextureSize.x;\n        float height = cc_jointsTextureSize.y;\n        float j = i * 4.0;\n        float x = mod(j, width);\n        float y = floor(j / width);\n\n        float dx = 1.0 / width;\n        float dy = 1.0 / height;\n\n        y = dy * (y + 0.5);\n\n        vec4 v1 = texture2D(cc_jointsTexture, vec2(dx * (x + 0.5), y));\n        vec4 v2 = texture2D(cc_jointsTexture, vec2(dx * (x + 1.5), y));\n        vec4 v3 = texture2D(cc_jointsTexture, vec2(dx * (x + 2.5), y));\n        vec4 v4 = texture2D(cc_jointsTexture, vec2(dx * (x + 3.5), y));\n\n        return mat4(v1, v2, v3, v4);\n      }\n    #else\n      float decode32(vec4 rgba) {\n        float Sign = 1.0 - step(128.0, rgba[0]) * 2.0;\n        float Exponent = 2.0 * mod(rgba[0], 128.0) + step(128.0, rgba[1]) - 127.0;\n        float Mantissa = mod(rgba[1], 128.0) * 65536.0 + rgba[2] * 256.0 + rgba[3] + 8388608.0;\n        return Sign * exp2(Exponent - 23.0) * Mantissa;\n      }\n      vec4 decodevec4 (vec4 x, vec4 y, vec4 z, vec4 w) {\n\n        return vec4(\n          decode32(x.wzyx * 255.0),\n          decode32(y.wzyx * 255.0),\n          decode32(z.wzyx * 255.0),\n          decode32(w.wzyx * 255.0)\n        );\n      }\n\n      vec4 decodevec4 (float dx, float x, float y) {\n        return decodevec4(\n          texture2D(cc_jointsTexture, vec2(dx * (x + 0.5), y)),\n          texture2D(cc_jointsTexture, vec2(dx * (x + 1.5), y)),\n          texture2D(cc_jointsTexture, vec2(dx * (x + 2.5), y)),\n          texture2D(cc_jointsTexture, vec2(dx * (x + 3.5), y))\n        );\n      }\n\n      mat4 getBoneMatrix(const in float i) {\n        float width = cc_jointsTextureSize.x;\n        float height = cc_jointsTextureSize.y;\n        float j = i * 16.0;\n        float x = mod(j, width);\n        float y = floor(j / width);\n\n        float dx = 1.0 / width;\n        float dy = 1.0 / height;\n\n        y = dy * (y + 0.5);\n\n        vec4 v1 = decodevec4(dx, x,       y);\n        vec4 v2 = decodevec4(dx, x+4.0,   y);\n        vec4 v3 = decodevec4(dx, x+8.0,   y);\n        vec4 v4 = decodevec4(dx, x+12.0,  y);\n\n        return mat4(v1, v2, v3, v4);\n      }\n    #endif\n  #else\n    uniform mat4 cc_jointMatrices[50];\nmat4 getBoneMatrix(const in float i) {\n      return cc_jointMatrices[int(i)];\n    }\n  #endif\n\n    mat4 skinMatrix() {\n      return\n        getBoneMatrix(a_joints.x) * a_weights.x +\n        getBoneMatrix(a_joints.y) * a_weights.y +\n        getBoneMatrix(a_joints.z) * a_weights.z +\n        getBoneMatrix(a_joints.w) * a_weights.w\n        ;\n    }\n#endif\n\nvoid SKIN_VERTEX(inout vec4 a1) {\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    a1 = m * a1;\n  #endif\n}\n\nvoid SKIN_VERTEX(inout vec4 a1, inout vec4 a2) {\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    a1 = m * a1;\n    a2 = m * a2;\n  #endif\n}\n\nvoid SKIN_VERTEX(inout vec4 a1, inout vec4 a2, inout vec4 a3) {\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    a1 = m * a1;\n    a2 = m * a2;\n    a3 = m * a3;\n  #endif\n}\n\nuniform vec2 mainTiling;\nuniform vec2 mainOffset;\nattribute vec3 a_position;\n\n#if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n  attribute mediump vec2 a_uv0;\n  varying mediump vec2 v_uv0;\n#endif\n\n#if CC_USE_ATTRIBUTE_COLOR\n  attribute lowp vec4 a_color;\n  varying lowp vec4 v_color;\n#endif\n\nvoid main () {\n  vec4 position = vec4(a_position, 1);\n\n  SKIN_VERTEX(position);\n  \n  #if CC_USE_ATTRIBUTE_COLOR\n      v_color = a_color;\n  #endif\n\n  #if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n      v_uv0 = a_uv0 * mainTiling + mainOffset;\n  #endif\n\n  gl_Position = cc_matViewProj * cc_matWorld * position;\n}\n",
          "frag": "\nprecision highp float;\n\nvec3 gammaToLinearSpaceRGB(in vec3 sRGB) {\n\n  return sRGB * (sRGB * (sRGB * 0.305306011 + 0.682171111) + 0.012522878);\n}\n\nvec3 linearToGammaSpaceRGB(in vec3 RGB) {\n\n  vec3 S1 = sqrt(RGB);\n  vec3 S2 = sqrt(S1);\n  vec3 S3 = sqrt(S2);\n  return 0.585122381 * S1 + 0.783140355 * S2 - 0.368262736 * S3;\n}\n\nvec4 gammaToLinearSpaceRGBA(in vec4 sRGBA) {\n  return vec4(gammaToLinearSpaceRGB(sRGBA.rgb), sRGBA.a);\n}\n\nvec4 linearToGammaSpaceRGBA(in vec4 RGBA) {\n  return vec4(linearToGammaSpaceRGB(RGBA.rgb), RGBA.a);\n}\n\nvec4 linearToLinear (in vec4 value) {\n  return value;\n}\n\n#if USE_ALPHA_TEST\n  \n  uniform float alphaThreshold;\n#endif\n\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\n\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\n\nuniform lowp vec4 diffuseColor;\n\n#if USE_DIFFUSE_TEXTURE\n  uniform sampler2D diffuseTexture;\n#endif\n\nvoid MULTIPLY_DIFFUSE_TEXTRUE_COLOR (inout vec4 color, in vec2 uv) {\n  #if USE_DIFFUSE_TEXTURE && CC_USE_ATTRIBUTE_UV0\n    vec4 diffuseTextureColor = texture2D(diffuseTexture, uv);\n    #if CC_USE_ALPHA_ATLAS_DIFFUSETEXTURE\n      diffuseTextureColor.a *= texture2D(diffuseTexture, uv + vec2(0, 0.5)).r;\n    #endif\n    color *= linearToLinear(diffuseTextureColor);\n  #endif\n}\n\nvoid CALC_DIFFUSE (inout vec4 color, in vec2 uv) {\n  color *= diffuseColor;\n  MULTIPLY_DIFFUSE_TEXTRUE_COLOR(color, uv);\n}\n\nvoid CALC_DIFFUSE (inout vec4 color) {\n  color *= diffuseColor;\n}\n\n#if CC_USE_ATTRIBUTE_COLOR\n  varying lowp vec4 v_color;\n#endif\n\n#if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n  varying mediump vec2 v_uv0;\n#endif\n\nvoid main () {\n  vec4 color = vec4(1, 1, 1, 1);\n\n  #if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n    CALC_DIFFUSE(color, v_uv0);\n  #else \n    CALC_DIFFUSE(color);\n  #endif\n\n  #if CC_USE_ATTRIBUTE_COLOR\n    color *= v_color;\n  #endif\n\n  ALPHA_TEST(color);\n\n  gl_FragColor = linearToLinear( color );\n}\n"
        },
        "builtins": {
          "globals": {
            "blocks": [
              {
                "name": "CCGlobal",
                "defines": []
              }
            ],
            "samplers": []
          },
          "locals": {
            "blocks": [
              {
                "name": "CCLocal",
                "defines": []
              },
              {
                "name": "CC_JOINT_MATRIX",
                "defines": [
                  "CC_USE_SKINNING"
                ]
              }
            ],
            "samplers": [
              {
                "name": "cc_jointsTexture",
                "defines": [
                  "CC_USE_SKINNING",
                  "CC_USE_JOINTS_TEXTRUE"
                ]
              }
            ]
          }
        },
        "defines": [
          {
            "name": "CC_USE_SKINNING",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_JOINTS_TEXTRUE",
            "type": "boolean",
            "defines": [
              "CC_USE_SKINNING"
            ]
          },
          {
            "name": "CC_JOINTS_TEXTURE_FLOAT32",
            "type": "boolean",
            "defines": [
              "CC_USE_SKINNING",
              "CC_USE_JOINTS_TEXTRUE"
            ]
          },
          {
            "name": "CC_USE_ATTRIBUTE_UV0",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "USE_DIFFUSE_TEXTURE",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_ATTRIBUTE_COLOR",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "USE_ALPHA_TEST",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_ALPHA_ATLAS_DIFFUSETEXTURE",
            "type": "boolean",
            "defines": [
              "USE_DIFFUSE_TEXTURE",
              "CC_USE_ATTRIBUTE_UV0"
            ]
          }
        ],
        "blocks": [
          {
            "name": "SKINNING",
            "members": [
              {
                "name": "cc_jointsTextureSize",
                "type": 14,
                "count": 1
              }
            ],
            "defines": [
              "CC_USE_SKINNING",
              "CC_USE_JOINTS_TEXTRUE"
            ],
            "binding": 0
          },
          {
            "name": "MAIN_TILING",
            "members": [
              {
                "name": "mainTiling",
                "type": 14,
                "count": 1
              },
              {
                "name": "mainOffset",
                "type": 14,
                "count": 1
              }
            ],
            "defines": [],
            "binding": 1
          },
          {
            "name": "ALPHA_TEST",
            "members": [
              {
                "name": "alphaThreshold",
                "type": 13,
                "count": 1
              }
            ],
            "defines": [
              "USE_ALPHA_TEST"
            ],
            "binding": 2
          },
          {
            "name": "DIFFUSE",
            "members": [
              {
                "name": "diffuseColor",
                "type": 16,
                "count": 1
              }
            ],
            "defines": [],
            "binding": 3
          }
        ],
        "samplers": [
          {
            "name": "diffuseTexture",
            "type": 29,
            "count": 1,
            "defines": [
              "USE_DIFFUSE_TEXTURE"
            ],
            "binding": 30
          }
        ],
        "dependencies": {},
        "name": "builtin-unlit-transparent|unlit-vs|unlit-fs"
      }
    ]
  },
  {
    "__type__": "cc.Material",
    "_name": "builtin-2d-spine",
    "_effectAsset": {
      "__uuid__": "0ek66qC1NOQLjgYmi04HvX"
    },
    "_defines": {},
    "_props": {}
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "header",
      "texture": "00S3bdOchMO4X/PYe+IxyM",
      "rect": [
        0,
        0,
        959,
        959
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        959,
        959
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.EffectAsset",
    "_name": "builtin-clear-stencil",
    "techniques": [
      {
        "passes": [
          {
            "blendState": {
              "targets": [
                {
                  "blend": true
                }
              ]
            },
            "rasterizerState": {
              "cullMode": 0
            },
            "program": "builtin-clear-stencil|vs|fs"
          }
        ]
      }
    ],
    "shaders": [
      {
        "hash": 2380943059,
        "glsl3": {
          "vert": "\nprecision highp float;\n\nin vec3 a_position;\n\nvoid main () {\n  gl_Position = vec4(a_position, 1);\n}\n\n",
          "frag": "\nprecision highp float;\n\nvoid main () {\n  gl_FragColor = vec4(1.0);\n}\n\n"
        },
        "glsl1": {
          "vert": "\nprecision highp float;\n\nattribute vec3 a_position;\n\nvoid main () {\n  gl_Position = vec4(a_position, 1);\n}\n\n",
          "frag": "\nprecision highp float;\n\nvoid main () {\n  gl_FragColor = vec4(1.0);\n}\n\n"
        },
        "builtins": {
          "globals": {
            "blocks": [],
            "samplers": []
          },
          "locals": {
            "blocks": [],
            "samplers": []
          }
        },
        "defines": [],
        "blocks": [],
        "samplers": [],
        "dependencies": {},
        "name": "builtin-clear-stencil|vs|fs"
      }
    ]
  },
  {
    "__type__": "cc.Material",
    "_name": "builtin-clear-stencil",
    "_effectAsset": {
      "__uuid__": "c0BAyVxX9JzZy8EjFrc9DU"
    },
    "_defines": {},
    "_props": {}
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  [
    {
      "__type__": "cc.SceneAsset",
      "_name": "index",
      "scene": {
        "__id__": 1
      },
      "asyncLoadAssets": null
    },
    {
      "__type__": "cc.Scene",
      "_name": "New Node",
      "_children": [
        {
          "__id__": 2
        }
      ],
      "_active": false,
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      },
      "autoReleaseAssets": false
    },
    {
      "__type__": "cc.Node",
      "_name": "Canvas",
      "_parent": {
        "__id__": 1
      },
      "_children": [
        {
          "__id__": 3
        },
        {
          "__id__": 4
        }
      ],
      "_components": [
        {
          "__type__": "cc.Canvas",
          "node": {
            "__id__": 2
          },
          "_designResolution": {
            "__type__": "cc.Size",
            "width": 500,
            "height": 580
          },
          "_fitHeight": false
        },
        {
          "__type__": "2d25f6QSSBHgJIpsVzSzGOI",
          "node": {
            "__id__": 2
          },
          "itemPrefab": {
            "__uuid__": "21to5mBCxGHJ0DpntfnNvA"
          },
          "container": {
            "__id__": 5
          },
          "oneSp": {
            "__uuid__": "57W4rzML5GyayZgD5dT0Rx"
          },
          "twoSp": {
            "__uuid__": "6cTWdFh+tEF5dFWfRK4aIJ"
          }
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 500,
        "height": 580
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          250,
          290,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      },
      "_id": "d0UnAOHRJNaYUM4gOpopRt"
    },
    {
      "__type__": "cc.Node",
      "_name": "Main Camera",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__type__": "cc.Camera",
          "node": {
            "__id__": 3
          },
          "_clearFlags": 7,
          "_depth": -1
        }
      ],
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          0,
          0,
          327.35760498046875,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "New ScrollView",
      "_parent": {
        "__id__": 2
      },
      "_children": [
        {
          "__id__": 5
        }
      ],
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 4
          },
          "_materials": [
            {
              "__uuid__": "ecpdLyjvZBwrvm+cedCcQy"
            }
          ],
          "_spriteFrame": {
            "__uuid__": "efC9vd+21K9pLx2aBNwwLv"
          },
          "_type": 1,
          "_sizeMode": 0
        },
        {
          "__type__": "cc.ScrollView",
          "node": {
            "__id__": 4
          },
          "horizontal": false,
          "brake": 0.75,
          "bounceDuration": 0.23,
          "_N$content": {
            "__id__": 5
          },
          "content": {
            "__id__": 5
          },
          "_N$horizontalScrollBar": null,
          "_N$verticalScrollBar": null
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 500,
        "height": 580
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "content",
      "_parent": {
        "__id__": 4
      },
      "_components": [
        {
          "__type__": "cc.Layout",
          "node": {
            "__id__": 5
          },
          "_layoutSize": {
            "__type__": "cc.Size",
            "width": 500
          },
          "_resize": 1,
          "_N$layoutType": 2,
          "_N$spacingY": 10
        },
        {
          "__type__": "cc.Widget",
          "node": {
            "__id__": 5
          },
          "_alignFlags": 1
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 500
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2",
        "x": 0.5,
        "y": 1
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          0,
          290,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    }
  ],
  {
    "__type__": "cc.Material",
    "_name": "builtin-2d-sprite",
    "_effectAsset": {
      "__uuid__": "28dPjdQWxEQIG3VVl1Qm6T"
    },
    "_defines": {
      "USE_TEXTURE": true
    },
    "_props": {}
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "bg_white",
      "texture": "b9IXXJipdO85KBTyLB3qYK",
      "rect": [
        0,
        0,
        489,
        859
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        489,
        859
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "num_item_bg",
      "texture": "16BItXjoZCAariJHPTcAiW",
      "rect": [
        0,
        0,
        999,
        130
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        999,
        130
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "num_gray",
      "texture": "e0PG6bbKlKbIybkOt4xLlK",
      "rect": [
        2,
        3,
        122,
        110
      ],
      "offset": [
        0.5,
        0
      ],
      "originalSize": [
        125,
        116
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  }
];
