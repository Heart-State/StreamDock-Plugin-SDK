import { usePluginStore, useWatchEvent } from '@/hooks/plugin';

export default function (name: string) {
  const ActionID = `${window.argv[3].plugin.uuid}.${name}`;

  // 事件侦听器
  const plugin = usePluginStore();

  plugin.eventEmitter.subscribe("stopBackground", (data) => {
    //停止背景释放资源
    plugin.stopBackground(data.device)
  })

  // 监听事件
  watch(() => Array.from(plugin.devices), (newDevices, oldDevices) => {
    // console.log('devices:', newDevices, oldDevices);
    // 设备列表变化对比
    const delDevices = oldDevices.filter(item => !newDevices.includes(item));
    delDevices.forEach((device) => {

    })
  }, { deep: true })

  useWatchEvent('action', {
    ActionID,
    willAppear({ context }) {
      console.log('创建:', context);
    },
    keyUp({ context }) {
    }
  });
}
