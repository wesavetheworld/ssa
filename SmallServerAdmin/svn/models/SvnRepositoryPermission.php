<?php
namespace Models
{

  /*
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

  /**
   * Represents access rules for a svn repository.
   */
  class SvnRepositoryPermission
  {
    
    /**
     * The group or username.
     * 
     * @var \string
     */
    public $ObjectName;

    /**
     * Permission to read.
     * 
     * @var \bool
     */
    public $Read;

    /**
     * Permission to write.
     * 
     * @var \bool
     */
    public $Write;

  }

}