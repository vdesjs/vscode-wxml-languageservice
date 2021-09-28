/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// file generated from vscode-web-custom-data NPM package

import { HTMLDataV1 } from '../../wxmlLanguageTypes';

export const htmlData: HTMLDataV1 = {
	"version": 1.1,
	"tags": [
		{
			"name": "view",
			"description": {
				"kind": "markdown",
				"value": "视图容器",
			},
			"attributes": [
				{
					"name": "hover-class",
					"description": {
						"kind": "markdown",
						"value": '指定按下去的样式类。当 `hover-class="none"` 时，没有点击态效果'
					}
				},
				{
					"name": "hover-stop-propagation",
					"description": "指定是否阻止本节点的祖先节点出现点击态"
				},
				{
					"name": "hover-start-time",
					"description": "按住后多久出现点击态，单位毫秒"
				},
				{
					"name": "hover-stay-time",
					"description": "手指松开后点击态保留时间，单位毫秒"
				}
			],
			"references": [
				{
					"name": "微信官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/component/view.html"
				}
			]
		},
		{
			"name": "button",
			"description": {
				"kind": "markdown",
				"value": "按钮"
			},
			"attributes": [
				{
					"name": "size",
					"description": "按钮的大小"
				},
				{
					"name": "type",
					"valueSet": "button-type",
					"description": "按钮的样式类型"
				},
				{
					"name": "plain",
					"valueSet": "b",
					"description": "按钮是否镂空，背景色透明"
				},
				{
					"name": "disabled",
					"valueSet": "b",
					"description": "是否禁用"
				},
				{
					"name": "loading",
					"valueSet": "b",
					"description": "名称前是否带 loading 图标"
				},
				{
					"name": "form-type",
					"valueSet": "form-type",
					"description": "用于 form 组件，点击分别会触发 form 组件的 submit/reset 事件"
				},
				{
					"name": "open-type",
					"valueSet": "button-open-type",
					"description": "微信开放能力"

				},
				{
					"name": "hover-class",
					"description": '指定按钮按下去的样式类。当 `hover-class="none"` 时，没有点击态效果'
				},
				{
					"name": "hover-stop-propagation",
					"valueSet": "b",
					"description": "指定是否阻止本节点的祖先节点出现点击态"
				},
				{
					"name": "hover-start-time",

					"description": "按住后多久出现点击态，单位毫秒"
				},
				{
					"name": "hover-stay-time",
					"description": "手指松开后点击态保留时间，单位毫秒"
				},
				{
					"name": "lang",
					"description": "指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。"
				},
				{
					"name": "session-from",
					"description": '会话来源，`open-type="contact"`时有效'
				},
				{
					"name": "send-message-title",
					"description": '会话内消息卡片标题，open-type="contact"时有效'
				},
				{
					"name": "send-message-path",
					"description": '会话内消息卡片点击跳转小程序路径，open-type="contact"时有效'
				},
				{
					"name": "send-message-img",
					"description": '会话内消息卡片图片，open-type="contact"时有效'
				},
				{
					"name": "bindgetuserinfo",
				},
				{
					"name": "bindcontact"
				},
				{
					"name": "bindgetphonenumber"
				},
				{
					"name": "binderror"
				},
				{
					"name": "bindopensetting"
				},
				{
					"name": "bindlaunchapp"
				}

			]

		}
	],
	"globalAttributes": [
		{
			"name": "class",
			"references": [
				{
					"name": "微信官方文档",
					"url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html"
				}
			]
		}
	],
	"valueSets": [
		{
			"name": "b",
			"values": [
				{
					"name": "true"
				},
				{
					"name": "false"
				}
			]
		},
		{
			"name": "form-type",
			"values": [
				{
					"name": "submit"
				},
				{
					"name": "reset"
				}
			],
		},
		{
			"name": "button-type",
			"values": [
				{
					"name": "primary",

				},
				{
					"name": "default"
				},
				{
					"name": "warn"
				}
			],
		},
		{
			"name": "button-open-type",
			"values": [
				{
					"name": "contact",
				},
				{
					"name": "share"
				},
				{
					"name": "getPhoneNumber"
				},
				{
					"name": "getUserInfo"
				},
				{
					"name": "launchApp"
				},
				{
					"name": "openSetting"
				},
				{
					"name": "feedback"
				}
			]
		}
	]
};
