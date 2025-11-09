(() => {
  const { mocks } = globalThis.onlinepngtoolsGlobal;

  mocks.config = `
    {
        "url": "change-png-opacity",
        "bridge": "change-image-opacity",
        "modifiers": [
            "no_pro_tip"
        ],
        "libraries": [
            "interactable",
            "imagefit"
        ],
        "autosave": [
            "options"
        ],
        "input": "image",
        "input_modifiers": [
            "immersive"
        ],
        "output": "image",
        "output_modifiers": [
            "immersive"
        ],
        "title": "Change PNG Opacity",
        "name": "PNG Opacity Changer",
        "from": "Input PNG",
        "to": "Output PNG (Semi-transparent)",
        "meta_desc": "World's simplest online utility that changes PNG opacity. Free, quick, and powerful. Import a PNG – make it semi-transparent.",
        "long_desc": "World's simplest online Portable Network Graphics (PNG) opacity changer. Just import your PNG image in the editor on the left, set the desired opacity level in the options, and you'll instantly get a semi-transparent PNG on the right. Free, quick, and very powerful. Import a PNG – change its opacity. Created with love by <a href=\\"https://www.browserling.com/?from=tools-png-ld-2021-04-25\\" rel=\\"nofollow\\">team Browserling</a>.",
        "card_desc": "Quickly create a translucent or semi-transparent PNG.",
        "this_tool_desc": "This browser-based program allows you to change the opacity of any PNG image. You can make each pixel of a PNG translucent so that the background that lies under the image shines through. You can specify the opacity level in the options on a scale from 0% to 100%. A non-transparent PNG has an opacity level of 100% and a semi-transparent/translucent PNG has an opacity level of less than 100%. For example, by setting the opacity to 80%, the background will be slightly visible through the PNG; by setting the opacity level to 20%, the PNG will be almost transparent; and by setting it to 0%, the PNG will be completely transparent (and will maintain the same width and height as the original input PNG). By default, all pixels in the PNG get the same alpha channel value (that is, all pixels have the same transparency level). This opacity mode is enabled via the \\"Apply Solid Opacity\\" option. If you switch to the \\"Apply Gradient Opacity\\" mode, the opacity of the pixels changes in a gradient direction. The gradient will smoothly change pixels' alpha levels from full opacity (or original alpha) to the opacity value specified in the options. There are two gradient types – linear gradient and radial gradient. In the second block of options, you can switch to the linear gradient mode and set its direction, or you can switch to the radial gradient and set its radius and direction. If you want to change the opacity of a smaller area than the entire PNG, you can select a rectangular area of the PNG and apply the opacity effect only in this region. The opacity region can be changed in the preview with your mouse or in the options using the left/right offsets and width/height parameters. Png-abulous!",
        "options": [
            {
                "group": "Opacity Level and Mode",
                "buttons": [
                    {
                        "label": "Opacity",
                        "comment": "Set the opacity level.",
                        "name": "opacity",
                        "type": "text",
                        "value": "50%"
                    },
                    {
                        "label": "Apply Solid Opacity",
                        "comment": "Set the same opacity\\nlevel for all pixels in the\\nselected region.",
                        "name": "solid-opacity",
                        "type": "radio",
                        "value": true
                    },
                    {
                        "label": "Apply Gradient Opacity",
                        "comment": "Change the opacity in\\na gradient in the selected\\nregion.",
                        "name": "gradient-opacity",
                        "type": "radio",
                        "value": false
                    }
                ]
            },
            {
                "group": "Gradient Opacity Options",
                "buttons": [
                    {
                        "label": "Linear Gradient",
                        "name": "linear-gradient",
                        "type": "radio",
                        "value": true
                    },
                    {
                        "label": "Linear Gradient Direction",
                        "comment": "Linear opacity direction.",
                        "name": "linear-direction",
                        "type": "list",
                        "values": [
                            {
                                "label": "Left to Right",
                                "value": "left-to-right",
                                "selected": true
                            },
                            {
                                "label": "Right to Left",
                                "value": "right-to-left"
                            },
                            {
                                "label": "Top to Bottom",
                                "value": "top-to-bottom"
                            },
                            {
                                "label": "Bottom to Top",
                                "value": "bottom-to-top"
                            }
                        ]
                    },
                    {
                        "label": "Radial Gradient",
                        "name": "radial-gradient",
                        "type": "radio",
                        "value": false
                    },
                    {
                        "label": "Radius",
                        "comment": "Radial opacity radius.",
                        "name": "radius",
                        "type": "text",
                        "value": 1
                    },
                    {
                        "label": "Radial Gradient Direction",
                        "comment": "Radial opacity direction.",
                        "name": "radial-direction",
                        "type": "list",
                        "values": [
                            {
                                "label": "Inside Out",
                                "value": "inside-out",
                                "selected": true
                            },
                            {
                                "label": "Outside In",
                                "value": "outside-in"
                            }
                        ]
                    }
                ]
            },
            {
                "group": "Opacity Area",
                "buttons": [
                    {
                        "label": "Left Position",
                        "name": "left",
                        "type": "text",
                        "value": "",
                        "compact": 2,
                        "comment": "Left position."
                    },
                    {
                        "label": "Top Position",
                        "name": "top",
                        "type": "text",
                        "value": "",
                        "compact": 2,
                        "comment": "Top position."
                    },
                    {
                        "label": "Width",
                        "name": "width",
                        "type": "text",
                        "value": "",
                        "compact": 2,
                        "comment": "Opacity area width."
                    },
                    {
                        "label": "Height",
                        "name": "height",
                        "type": "text",
                        "value": "",
                        "compact": 2,
                        "comment": "Opacity area height."
                    }
                ]
            }
        ],
        "examples": [
            {
                "meta": {
                    "input_image": true,
                    "output_image": true
                },
                "title": "Make a PNG 50% Transparent",
                "description": "In this example, we make a starry sky PNG image semi-transparent. We set the opacity to 50%, which makes all the pixels in the PNG 50% transparent. (Source: Pexels.)",
                "input": "examples-onlinepngtools/starry-sky.png",
                "output": "examples-onlinepngtools/starry-sky-semi-transparent.png",
                "options": {
                    "opacity": "50%",
                    "solid-opacity": true,
                    "left": "",
                    "top": "",
                    "width": "",
                    "height": ""
                }
            },
            {
                "meta": {
                    "input_image": true,
                    "output_image": true
                },
                "title": "Linear Gradient Opacity",
                "description": "In this example, we apply a gradient opacity to a PNG photo of a green leaf. The linear gradient starts at the top of the PNG and moves to the bottom of the PNG. At the top, the pixels are at their maximum opacity (non-translucent), and at the bottom, the opacity is reduced to 10%, which makes them translucent. (Source: Pexels.)",
                "input": "examples-onlinepngtools/plant-leaf-texture.png",
                "output": "examples-onlinepngtools/plant-leaf-texture-linear-gradient-opacity.png",
                "options": {
                    "opacity": "10%",
                    "gradient-opacity": true,
                    "linear-gradient": true,
                    "linear-direction": "top-to-bottom",
                    "left": "",
                    "top": "",
                    "width": "",
                    "height": ""
                }
            },
            {
                "meta": {
                    "input_image": true,
                    "output_image": true
                },
                "title": "Transparent Phone Screen",
                "description": "In this example, we make the smartphone screen in a PNG stock photo completely transparent. We select a rectangular area of the phone in the preview with the mouse and set the opacity value in the options to 0%. (Source: Pexels.)",
                "input": "examples-onlinepngtools/smartphone-in-hand.png",
                "output": "examples-onlinepngtools/smartphone-in-hand-transparent-screen.png",
                "options": {
                    "opacity": "0%",
                    "solid-opacity": true,
                    "left": 204,
                    "top": 170,
                    "width": 160,
                    "height": 294
                }
            },
            {
                "meta": {
                    "input_image": true,
                    "output_image": true
                },
                "title": "Radial Gradient Opacity",
                "description": "In this example, we create a round semi-transparent image of a gray cat. We use the radial gradient mode with a radius of 200 pixels and the \\"Inside Out\\" gradient direction. The pixels in the center of the PNG with a radius of 200 have their original alpha channels, but pixels outside this radius gradually decrease their opacity and disappear completely at the edge of the image. (Source: Pexels.)",
                "input": "examples-onlinepngtools/grey-cat.png",
                "output": "examples-onlinepngtools/grey-cat-radial-gradient-opacity.png",
                "options": {
                    "opacity": "0%",
                    "gradient-opacity": true,
                    "radial-gradient": true,
                    "radial-direction": "inside-out",
                    "radius": 200,
                    "left": "",
                    "top": "",
                    "width": "",
                    "height": ""
                }
            },
            {
                "meta": {
                    "input_image": true,
                    "output_image": true
                },
                "title": "Make Big Ben's Face Transparent",
                "description": "In this example, we load a PNG picture of the Big Ben clock with no background and make the clock's face transparent. We select a circular area for the transparency using a 40px radial gradient. We change the opacity of the gradient from outside to inside and set it to 0%, creating a hole in the tower. (Source: Pexels.)",
                "input": "examples-onlinepngtools/big-ben.png",
                "output": "examples-onlinepngtools/big-ben-transparent-clock.png",
                "options": {
                    "opacity": "0%",
                    "gradient-opacity": true,
                    "radial-gradient": true,
                    "radial-direction": "outside-in",
                    "radius": 40,
                    "left": "129",
                    "top": "337",
                    "width": "125",
                    "height": "110"
                }
            },
            {
                "meta": {
                    "input_image": true,
                    "output_image": true
                },
                "title": "Unusual Radial Gradient",
                "description": "In this example, we use the radial gradient mode to create an extraordinary PNG file of water droplets. We direct the gradient outward but because the radius is so large (90px), the smooth transition between translucency and opacity disappears. The result is a perfect circle that's cut out in the center of the PNG. (Source: Pexels.)",
                "input": "examples-onlinepngtools/water-droplets.png",
                "output": "examples-onlinepngtools/water-droplets-radial-gradient-transparency.png",
                "options": {
                    "opacity": "0%",
                    "gradient-opacity": true,
                    "radial-gradient": true,
                    "radial-direction": "inside-out",
                    "radius": 90,
                    "left": "0",
                    "top": "92",
                    "width": "571",
                    "height": "181"
                }
            }
        ]
    }
  `;
})();
