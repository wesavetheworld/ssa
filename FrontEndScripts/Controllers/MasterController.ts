﻿/*
 * Copyright © Aleksey Nemiro, 2016. All rights reserved.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
module SmallServerAdmin.Controllers {

	/**
	 * Represents the main controller.
	 */
	export class MasterController implements Nemiro.IController {

		public Scope: any;
		public Context: Nemiro.AngularContext;

		/** SSA config. */
		public get Config(): Models.Config {
			return this.Scope.Config;
    }

		/** Text of progress message. */
		public get ProgressMessage(): string {
			return this.Scope.ProgressMessage;
    }
		public set ProgressMessage(value: string) {
			this.Scope.ProgressMessage = value;
    }
		
		/** Title of progress window. */
		public get ProgressTitle(): string {
			return this.Scope.ProgressTitle;
    }
		public set ProgressTitle(value: string) {
			this.Scope.ProgressTitle = value;
    }

		private Progress: Nemiro.UI.Dialog;

		constructor(context: Nemiro.AngularContext) {
			var $this = this;
			
			$this.Context = context;
			$this.Scope = $this.Context.Scope;
			
			if ($('#config').length <= 0 || $('#config').val() == '' || $('#config').val() == '[]') {
				Nemiro.UI.Dialog.Alert('Config not found.<br />Please check <code>$config[\'client\']</code> of the <strong>/ssa.config.php</strong>.', 'Error');
			}

			$this.Scope.Config = JSON.parse($('#config').val());

			console.log('Config', $this.Config);

			// progress dialog
			$this.Progress = Nemiro.UI.Dialog.CreateFromElement($('#progress'));
			$this.Progress.DisableOverlayClose = true;
			$this.Progress.DisplayCloseButton = false;
			$this.Progress.DontRestore = true;

			$this.Scope.ShowProgress = (message?: string, title?: string) => {
				$this.ProgressTitle = title;
				$this.ProgressMessage = message;
				$this.Progress.Show();
			};

			$this.Scope.CloseProgress = () => {
				$this.Progress.Close();
			};
		}

	}

} 