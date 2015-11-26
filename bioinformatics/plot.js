Bokeh.set_log_level("info");

var all_models = [{
    "attributes": {
        "plot": {
            "subtype": "Figure",
            "type": "Plot",
            "id": "e73a6342-83e3-4fa6-b82d-7ab853b2a247"
        },
        "dimensions": ["width", "height"],
        "tags": [],
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "id": "359637c9-7191-44d9-83c9-36f734aa3504"
    },
    "type": "WheelZoomTool",
    "id": "359637c9-7191-44d9-83c9-36f734aa3504"
}, {
    "attributes": {
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "id": "f8b585e3-be38-4360-aa38-3928f1ad6cd7",
        "tags": []
    },
    "type": "BasicTickFormatter",
    "id": "f8b585e3-be38-4360-aa38-3928f1ad6cd7"
}, {
    "attributes": {
        "plot": {
            "subtype": "Figure",
            "type": "Plot",
            "id": "e73a6342-83e3-4fa6-b82d-7ab853b2a247"
        },
        "tags": [],
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "dimension": 0,
        "ticker": {
            "type": "BasicTicker",
            "id": "6325bf7d-9790-4d27-80a7-3a299e0d3d97"
        },
        "id": "3e0f026b-188e-4bc9-b6a8-5e9ca6f3e3da"
    },
    "type": "Grid",
    "id": "3e0f026b-188e-4bc9-b6a8-5e9ca6f3e3da"
}, {
    "attributes": {
        "tags": [],
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "mantissas": [2, 5, 10],
        "id": "f90ba89e-27a3-4318-8f84-8cccc44b550e",
        "num_minor_ticks": 5
    },
    "type": "BasicTicker",
    "id": "f90ba89e-27a3-4318-8f84-8cccc44b550e"
}, {
    "attributes": {
        "line_color": {
            "value": "#1f77b4"
        },
        "line_width": {
            "value": 2
        },
        "line_alpha": {
            "value": 1.0
        },
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "tags": [],
        "y": {
            "field": "y"
        },
        "x": {
            "field": "x"
        },
        "id": "71abbf72-341a-4a7b-a915-59df7a7d33db"
    },
    "type": "Line",
    "id": "71abbf72-341a-4a7b-a915-59df7a7d33db"
}, {
    "attributes": {
        "tags": [],
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "id": "ec5cfca8-27ea-4683-8071-736c1dc683ff",
        "children": [{
            "subtype": "Figure",
            "type": "Plot",
            "id": "e73a6342-83e3-4fa6-b82d-7ab853b2a247"
        }]
    },
    "type": "PlotContext",
    "id": "ec5cfca8-27ea-4683-8071-736c1dc683ff"
}, {
    "attributes": {
        "plot": {
            "subtype": "Figure",
            "type": "Plot",
            "id": "e73a6342-83e3-4fa6-b82d-7ab853b2a247"
        },
        "dimensions": ["width", "height"],
        "tags": [],
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "id": "fbc34d02-54b5-45d9-be99-619eaa5a3924"
    },
    "type": "BoxZoomTool",
    "id": "fbc34d02-54b5-45d9-be99-619eaa5a3924"
}, {
    "attributes": {
        "tags": [],
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "renderers": [],
        "callback": null,
        "names": [],
        "id": "884c5ef4-256a-4135-bf7a-9be9be71b392"
    },
    "type": "DataRange1d",
    "id": "884c5ef4-256a-4135-bf7a-9be9be71b392"
}, {
    "attributes": {
        "geometries": [],
        "tags": [],
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "id": "522f67bd-625f-4eeb-a831-41205606f827"
    },
    "type": "ToolEvents",
    "id": "522f67bd-625f-4eeb-a831-41205606f827"
}, {
    "subtype": "Figure",
    "type": "Plot",
    "id": "e73a6342-83e3-4fa6-b82d-7ab853b2a247",
    "attributes": {
        "x_range": {
            "type": "DataRange1d",
            "id": "86de58eb-d5ca-4ac8-a4ab-376a55117c40"
        },
        "right": [],
        "tags": [],
        "tools": [{
            "type": "PanTool",
            "id": "13d3676b-562e-4f36-a643-15367f766971"
        }, {
            "type": "WheelZoomTool",
            "id": "359637c9-7191-44d9-83c9-36f734aa3504"
        }, {
            "type": "BoxZoomTool",
            "id": "fbc34d02-54b5-45d9-be99-619eaa5a3924"
        }, {
            "type": "PreviewSaveTool",
            "id": "92624840-dc60-44c8-90f9-e51c35283461"
        }, {
            "type": "ResizeTool",
            "id": "e3102788-9d6d-48cb-82dd-7e40b17a59c8"
        }, {
            "type": "ResetTool",
            "id": "c38082a1-c359-496c-9b50-7c597a350e74"
        }, {
            "type": "HelpTool",
            "id": "24b8b5d2-7675-423c-bcfe-5a2772372893"
        }],
        "title": "Test Plot",
        "extra_y_ranges": {},
        "renderers": [{
            "type": "LinearAxis",
            "id": "ec17bc4e-106e-48cd-9375-097bfdb57ad4"
        }, {
            "type": "Grid",
            "id": "3e0f026b-188e-4bc9-b6a8-5e9ca6f3e3da"
        }, {
            "type": "LinearAxis",
            "id": "f0b8d5de-19dc-4d73-84e5-5a2ebdc875bd"
        }, {
            "type": "Grid",
            "id": "3b55314f-8b82-491a-9cbf-532495003d66"
        }, {
            "type": "Legend",
            "id": "dd71b6aa-2bb3-4552-8e3b-d6a36cb4e9d5"
        }, {
            "type": "GlyphRenderer",
            "id": "f4e10562-215e-42e9-baf4-96a412f09365"
        }],
        "extra_x_ranges": {},
        "below": [{
            "type": "LinearAxis",
            "id": "ec17bc4e-106e-48cd-9375-097bfdb57ad4"
        }],
        "tool_events": {
            "type": "ToolEvents",
            "id": "522f67bd-625f-4eeb-a831-41205606f827"
        },
        "above": [],
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "y_range": {
            "type": "DataRange1d",
            "id": "884c5ef4-256a-4135-bf7a-9be9be71b392"
        },
        "id": "e73a6342-83e3-4fa6-b82d-7ab853b2a247",
        "left": [{
            "type": "LinearAxis",
            "id": "f0b8d5de-19dc-4d73-84e5-5a2ebdc875bd"
        }]
    }
}, {
    "attributes": {
        "line_color": {
            "value": "#1f77b4"
        },
        "line_width": {
            "value": 2
        },
        "line_alpha": {
            "value": 0.1
        },
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "tags": [],
        "y": {
            "field": "y"
        },
        "x": {
            "field": "x"
        },
        "id": "c644d5fd-a263-42cc-b2e3-5bec75b3f3c3"
    },
    "type": "Line",
    "id": "c644d5fd-a263-42cc-b2e3-5bec75b3f3c3"
}, {
    "attributes": {
        "plot": {
            "subtype": "Figure",
            "type": "Plot",
            "id": "e73a6342-83e3-4fa6-b82d-7ab853b2a247"
        },
        "tags": [],
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "axis_label": "Seconds",
        "formatter": {
            "type": "BasicTickFormatter",
            "id": "f3ae24b7-9a45-44f7-bf86-f2a929add823"
        },
        "ticker": {
            "type": "BasicTicker",
            "id": "f90ba89e-27a3-4318-8f84-8cccc44b550e"
        },
        "id": "f0b8d5de-19dc-4d73-84e5-5a2ebdc875bd"
    },
    "type": "LinearAxis",
    "id": "f0b8d5de-19dc-4d73-84e5-5a2ebdc875bd"
}, {
    "attributes": {
        "plot": {
            "subtype": "Figure",
            "type": "Plot",
            "id": "e73a6342-83e3-4fa6-b82d-7ab853b2a247"
        },
        "tags": [],
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "id": "c38082a1-c359-496c-9b50-7c597a350e74"
    },
    "type": "ResetTool",
    "id": "c38082a1-c359-496c-9b50-7c597a350e74"
}, {
    "attributes": {
        "plot": {
            "subtype": "Figure",
            "type": "Plot",
            "id": "e73a6342-83e3-4fa6-b82d-7ab853b2a247"
        },
        "tags": [],
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "id": "92624840-dc60-44c8-90f9-e51c35283461"
    },
    "type": "PreviewSaveTool",
    "id": "92624840-dc60-44c8-90f9-e51c35283461"
}, {
    "attributes": {
        "tags": [],
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "renderers": [],
        "callback": null,
        "names": [],
        "id": "86de58eb-d5ca-4ac8-a4ab-376a55117c40"
    },
    "type": "DataRange1d",
    "id": "86de58eb-d5ca-4ac8-a4ab-376a55117c40"
}, {
    "attributes": {
        "plot": {
            "subtype": "Figure",
            "type": "Plot",
            "id": "e73a6342-83e3-4fa6-b82d-7ab853b2a247"
        },
        "dimensions": ["width", "height"],
        "tags": [],
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "id": "13d3676b-562e-4f36-a643-15367f766971"
    },
    "type": "PanTool",
    "id": "13d3676b-562e-4f36-a643-15367f766971"
}, {
    "attributes": {
        "plot": {
            "subtype": "Figure",
            "type": "Plot",
            "id": "e73a6342-83e3-4fa6-b82d-7ab853b2a247"
        },
        "tags": [],
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "axis_label": "Degrees Celsius",
        "formatter": {
            "type": "BasicTickFormatter",
            "id": "f8b585e3-be38-4360-aa38-3928f1ad6cd7"
        },
        "ticker": {
            "type": "BasicTicker",
            "id": "6325bf7d-9790-4d27-80a7-3a299e0d3d97"
        },
        "id": "ec17bc4e-106e-48cd-9375-097bfdb57ad4"
    },
    "type": "LinearAxis",
    "id": "ec17bc4e-106e-48cd-9375-097bfdb57ad4"
}, {
    "attributes": {
        "plot": {
            "subtype": "Figure",
            "type": "Plot",
            "id": "e73a6342-83e3-4fa6-b82d-7ab853b2a247"
        },
        "tags": [],
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "dimension": 1,
        "ticker": {
            "type": "BasicTicker",
            "id": "f90ba89e-27a3-4318-8f84-8cccc44b550e"
        },
        "id": "3b55314f-8b82-491a-9cbf-532495003d66"
    },
    "type": "Grid",
    "id": "3b55314f-8b82-491a-9cbf-532495003d66"
}, {
    "attributes": {
        "column_names": ["y", "x"],
        "tags": [],
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "selected": {
            "2d": {
                "indices": []
            },
            "1d": {
                "indices": []
            },
            "0d": {
                "indices": [],
                "flag": false
            }
        },
        "callback": null,
        "data": {
            "y": [6, 7, 2, 4, 5],
            "x": [1, 2, 3, 4, 5]
        },
        "id": "c3a42602-deaa-4efe-8560-8a6f278d46c4"
    },
    "type": "ColumnDataSource",
    "id": "c3a42602-deaa-4efe-8560-8a6f278d46c4"
}, {
    "attributes": {
        "nonselection_glyph": {
            "type": "Line",
            "id": "c644d5fd-a263-42cc-b2e3-5bec75b3f3c3"
        },
        "data_source": {
            "type": "ColumnDataSource",
            "id": "c3a42602-deaa-4efe-8560-8a6f278d46c4"
        },
        "tags": [],
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "selection_glyph": null,
        "id": "f4e10562-215e-42e9-baf4-96a412f09365",
        "glyph": {
            "type": "Line",
            "id": "71abbf72-341a-4a7b-a915-59df7a7d33db"
        }
    },
    "type": "GlyphRenderer",
    "id": "f4e10562-215e-42e9-baf4-96a412f09365"
}, {
    "attributes": {
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "id": "f3ae24b7-9a45-44f7-bf86-f2a929add823",
        "tags": []
    },
    "type": "BasicTickFormatter",
    "id": "f3ae24b7-9a45-44f7-bf86-f2a929add823"
}, {
    "attributes": {
        "plot": {
            "subtype": "Figure",
            "type": "Plot",
            "id": "e73a6342-83e3-4fa6-b82d-7ab853b2a247"
        },
        "tags": [],
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "id": "e3102788-9d6d-48cb-82dd-7e40b17a59c8"
    },
    "type": "ResizeTool",
    "id": "e3102788-9d6d-48cb-82dd-7e40b17a59c8"
}, {
    "attributes": {
        "plot": {
            "subtype": "Figure",
            "type": "Plot",
            "id": "e73a6342-83e3-4fa6-b82d-7ab853b2a247"
        },
        "legends": [
            ["Temp", [{
                "type": "GlyphRenderer",
                "id": "f4e10562-215e-42e9-baf4-96a412f09365"
            }]]
        ],
        "tags": [],
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "id": "dd71b6aa-2bb3-4552-8e3b-d6a36cb4e9d5"
    },
    "type": "Legend",
    "id": "dd71b6aa-2bb3-4552-8e3b-d6a36cb4e9d5"
}, {
    "attributes": {
        "plot": {
            "subtype": "Figure",
            "type": "Plot",
            "id": "e73a6342-83e3-4fa6-b82d-7ab853b2a247"
        },
        "tags": [],
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "id": "24b8b5d2-7675-423c-bcfe-5a2772372893"
    },
    "type": "HelpTool",
    "id": "24b8b5d2-7675-423c-bcfe-5a2772372893"
}, {
    "attributes": {
        "tags": [],
        "doc": "8cba037c-279c-4f5e-b785-5271ed4d61f0",
        "mantissas": [2, 5, 10],
        "id": "6325bf7d-9790-4d27-80a7-3a299e0d3d97",
        "num_minor_ticks": 5
    },
    "type": "BasicTicker",
    "id": "6325bf7d-9790-4d27-80a7-3a299e0d3d97"
}];

function renderPlot() {
  Bokeh.$(function() {
    Bokeh.load_models(all_models);
    var plots = [{'modeltype': 'PlotContext', 'elementid': '#5736d491-c229-4ff7-a0b3-db7434e5809a', 'modelid': 'ec5cfca8-27ea-4683-8071-736c1dc683ff'}];
    for (idx in plots) {
      var plot = plots[idx];
      var model = Bokeh.Collections(plot.modeltype).get(plot.modelid);
      Bokeh.logger.info('Realizing plot:')
      Bokeh.logger.info(' - modeltype: ' + plot.modeltype);
      Bokeh.logger.info(' - modelid: ' + plot.modelid);
      Bokeh.logger.info(' - elementid: ' + plot.elementid);
      var view = new model.default_view({
        model: model,
        el: plot.elementid
      });
      Bokeh.index[plot.modelid] = view;
    }
  });
}
