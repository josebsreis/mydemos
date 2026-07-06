(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"class":"Player","start":"this.init()","data":{"textToSpeechConfig":{"speechOnQuizQuestion":false,"pitch":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"volume":1,"rate":1},"defaultLocale":"en","history":{},"displayTooltipInTouchScreens":true,"locales":{"en":"locale/en.txt"},"name":"Player741"},"minHeight":0,"defaultMenu":["fullscreen","mute","rotation"],"minWidth":0,"propagateClick":false,"backgroundColorRatios":[0],"width":"100%","xrPanelsEnabled":true,"scrollBarMargin":2,"height":"100%","watermark":false,"children":["this.MainViewer"],"scrollBarColor":"#000000","backgroundColor":["#FFFFFF"],"layout":"absolute","gap":10,"hash": "66e4956bce8f9b4380f5c0dbde3d18528f29c1be7e9d7772cbdca2663dc33a15", "definitions": [{"displayPlaybackBar":true,"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","arrowKeysAction":"translate","viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer","keepModel3DLoadedWithoutLocation":true,"touchControlMode":"drag_rotation","aaEnabled":true},{"items":[{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","media":"this.panorama_267E4F29_3702_BB5E_41B9_77172A346890","camera":"this.panorama_267E4F29_3702_BB5E_41B9_77172A346890_camera","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"items":[{"player":"this.MainViewerVideoPlayer","class":"VideoPlayListItem","media":"this.video_22CE75C9_3703_4EDE_417C_B48423C59A11","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_23B63CAE_372B_0CCF_41B7_7124E942E3F9, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_23B63CAE_372B_0CCF_41B7_7124E942E3F9, 0)","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)"}],"class":"PlayList","id":"playList_23B63CAE_372B_0CCF_41B7_7124E942E3F9"},{"enterPointingToHorizon":true,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera","id":"panorama_267E4F29_3702_BB5E_41B9_77172A346890_camera","initialSequence":"this.sequence_27991767_3703_4BD2_41C5_EFB77DB57CA7"},{"displayPlaybackBar":true,"viewerArea":"this.MainViewer","class":"VideoPlayer","id":"MainViewerVideoPlayer","displayPlayOverlay":true,"xrEnabled":true,"clickAction":"play_pause"},{"surfaceReticleColor":"#FFFFFF","progressBarBorderColor":"#000000","subtitlesTop":0,"minHeight":50,"subtitlesTextShadowColor":"#000000","propagateClick":false,"minWidth":100,"toolTipFontColor":"#606060","progressBarBackgroundColorRatios":[0],"subtitlesFontColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"subtitlesFontSize":"3vmin","progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadHeight":15,"toolTipTextShadowColor":"#000000","width":"100%","progressBackgroundColor":["#000000"],"vrThumbstickRotationStep":20,"playbackBarHeadShadow":true,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesBorderColor":"#FFFFFF","subtitlesBottom":50,"progressBorderSize":0,"progressBottom":10,"toolTipPaddingRight":6,"playbackBarBackgroundColor":["#FFFFFF"],"vrPointerSelectionColor":"#FF6600","toolTipFontFamily":"Arial","progressBarBorderSize":0,"playbackBarHeadWidth":6,"firstTransitionDuration":0,"playbackBarBottom":5,"playbackBarProgressBorderSize":0,"playbackBarHeight":10,"playbackBarBackgroundColorDirection":"vertical","progressBarBorderRadius":2,"progressHeight":2,"playbackBarRight":0,"vrPointerSelectionTime":2000,"data":{"name":"Main Viewer"},"toolTipPaddingTop":4,"playbackBarProgressBorderRadius":0,"surfaceReticleSelectionColor":"#FFFFFF","toolTipShadowColor":"#333138","toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBackgroundColor":["#3399FF"],"height":"100%","progressBorderRadius":2,"class":"ViewerArea","id":"MainViewer","playbackBarHeadShadowVerticalLength":0,"playbackBarHeadShadowOpacity":0.7,"subtitlesFontFamily":"Arial","progressLeft":"33%","vrPointerColor":"#FFFFFF","toolTipBorderColor":"#767676","toolTipPaddingBottom":4,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadowHorizontalLength":0,"toolTipFontSize":"1.11vmin","playbackBarBorderColor":"#FFFFFF","toolTipPaddingLeft":6,"playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"playbackBarHeadBorderRadius":0,"subtitlesGap":0,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"progressBackgroundColorRatios":[0],"subtitlesTextShadowVerticalLength":1,"subtitlesBackgroundColor":"#000000","progressRight":"33%","progressOpacity":0.7,"progressBarBackgroundColorDirection":"horizontal","playbackBarBackgroundOpacity":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowHorizontalLength":1,"playbackBarLeft":0,"subtitlesTextShadowOpacity":1},{"class":"Panorama","label":trans('panorama_267E4F29_3702_BB5E_41B9_77172A346890.label'),"data":{"label":"3"},"hfovMax":130,"overlays":["this.overlay_21B88883_3703_4552_41A6_F92D131C1B07"],"vfov":180,"frames":[{"thumbnailUrl":"media/panorama_267E4F29_3702_BB5E_41B9_77172A346890_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"rowCount":4,"height":4096,"url":"media/panorama_267E4F29_3702_BB5E_41B9_77172A346890_0/{face}/0/{row}_{column}.webp","colCount":24,"width":24576,"tags":"ondemand","class":"TiledImageResourceLevel"},{"rowCount":2,"height":2048,"url":"media/panorama_267E4F29_3702_BB5E_41B9_77172A346890_0/{face}/1/{row}_{column}.webp","colCount":12,"width":12288,"tags":"ondemand","class":"TiledImageResourceLevel"},{"rowCount":1,"height":1024,"url":"media/panorama_267E4F29_3702_BB5E_41B9_77172A346890_0/{face}/2/{row}_{column}.webp","colCount":6,"width":6144,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}]}}],"thumbnailUrl":"media/panorama_267E4F29_3702_BB5E_41B9_77172A346890_t.webp","id":"panorama_267E4F29_3702_BB5E_41B9_77172A346890","hfov":360},{"class":"Video","video":"this.videores_2FBE8624_3702_CD56_41B5_8ED47C4934F8","label":trans('video_22CE75C9_3703_4EDE_417C_B48423C59A11.label'),"data":{"label":"door_open_from3"},"width":2800,"thumbnailUrl":"media/video_22CE75C9_3703_4EDE_417C_B48423C59A11_t.webp","height":2400,"id":"video_22CE75C9_3703_4EDE_417C_B48423C59A11"},{"class":"PanoramaCameraSequence","id":"sequence_27991767_3703_4BD2_41C5_EFB77DB57CA7","movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}]},{"class":"VideoPanoramaOverlay","distance":50,"image":"this.res_2F3E703C_3703_45B6_41BA_74FFFE97C396","cues":[],"data":{"label":"Video","hasAudio":false},"vfov":120,"click":"this.overlay_21B88883_3703_4552_41A6_F92D131C1B07.play()","useHandCursor":true,"pitch":-5.89,"id":"overlay_21B88883_3703_4552_41A6_F92D131C1B07","yaw":71.8,"hfov":140,"video":"this.videores_2FBE8624_3702_CD56_41B5_8ED47C4934F8"},{"height":796,"id":"videores_2FBE8624_3702_CD56_41B5_8ED47C4934F8","hasAudio":false,"class":"VideoResource","levels":["this.videolevel_2FCBF628_3702_CD5E_41C5_8F7774A667ED"],"width":928},{"class":"ImageResource","id":"res_2F3E703C_3703_45B6_41BA_74FFFE97C396","levels":[{"height":1280,"url":"media/res_2F3E703C_3703_45B6_41BA_74FFFE97C396_0.webp","width":1280,"class":"ImageResourceLevel"}]},{"bitrate":1662,"class":"VideoResourceLevel","url":trans('videolevel_2FCBF628_3702_CD5E_41C5_8F7774A667ED.url'),"codec":"h264","posterURL":trans('videolevel_2FCBF628_3702_CD5E_41C5_8F7774A667ED.posterURL'),"width":928,"type":"video/mp4","height":796,"id":"videolevel_2FCBF628_3702_CD5E_41C5_8F7774A667ED","framerate":30}],"scripts":{"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"initAnalytics":TDV.Tour.Script.initAnalytics,"getPixels":TDV.Tour.Script.getPixels,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setMapLocation":TDV.Tour.Script.setMapLocation,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"registerKey":TDV.Tour.Script.registerKey,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"resumePlayers":TDV.Tour.Script.resumePlayers,"setValue":TDV.Tour.Script.setValue,"clone":TDV.Tour.Script.clone,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"playAudioList":TDV.Tour.Script.playAudioList,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"quizShowScore":TDV.Tour.Script.quizShowScore,"historyGoBack":TDV.Tour.Script.historyGoBack,"translate":TDV.Tour.Script.translate,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"init":TDV.Tour.Script.init,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"initQuiz":TDV.Tour.Script.initQuiz,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getMediaByName":TDV.Tour.Script.getMediaByName,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"downloadFile":TDV.Tour.Script.downloadFile,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"quizStart":TDV.Tour.Script.quizStart,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getKey":TDV.Tour.Script.getKey,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setLocale":TDV.Tour.Script.setLocale,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"unloadViewer":TDV.Tour.Script.unloadViewer,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"startMeasurement":TDV.Tour.Script.startMeasurement,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getComponentByName":TDV.Tour.Script.getComponentByName,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getOverlays":TDV.Tour.Script.getOverlays,"disableVR":TDV.Tour.Script.disableVR,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"toggleVR":TDV.Tour.Script.toggleVR,"quizFinish":TDV.Tour.Script.quizFinish,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"executeJS":TDV.Tour.Script.executeJS,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"unregisterKey":TDV.Tour.Script.unregisterKey,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"shareSocial":TDV.Tour.Script.shareSocial,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"enableVR":TDV.Tour.Script.enableVR,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"textToSpeech":TDV.Tour.Script.textToSpeech,"createTween":TDV.Tour.Script.createTween,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"historyGoForward":TDV.Tour.Script.historyGoForward,"showWindowBase":TDV.Tour.Script.showWindowBase,"mixObject":TDV.Tour.Script.mixObject,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMainViewer":TDV.Tour.Script.getMainViewer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"showWindow":TDV.Tour.Script.showWindow,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"existsKey":TDV.Tour.Script.existsKey,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"cloneBindings":TDV.Tour.Script.cloneBindings,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"openLink":TDV.Tour.Script.openLink,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"isPanorama":TDV.Tour.Script.isPanorama,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot},"id":"rootPlayer"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.1.0, Mon Jul 6 2026